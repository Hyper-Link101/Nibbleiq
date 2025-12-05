import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

interface DemoBookingCalendarProps {
  onSuccess?: () => void;
  source?: string; // Track where the booking came from
}

export function DemoBookingCalendar({ onSuccess, source = 'general' }: DemoBookingCalendarProps) {
  const [step, setStep] = useState<'select' | 'details' | 'confirmed'>('select');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    currentRevenue: '',
    primaryChallenge: '',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });

  // Generate available time slots (9 AM - 5 PM EST)
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  // Generate next 14 business days
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let daysAdded = 0;
    let currentDate = new Date(today);

    while (daysAdded < 14) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayOfWeek = currentDate.getDay();
      
      // Skip weekends (0 = Sunday, 6 = Saturday)
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push({
          value: currentDate.toISOString().split('T')[0],
          label: currentDate.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })
        });
        daysAdded++;
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('details');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.restaurantName) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create Google Calendar event URL
      const eventTitle = `NibbleIQ Demo - ${formData.restaurantName}`;
      const eventDetails = `
Demo Call for ${formData.restaurantName}

Contact: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Monthly Revenue: ${formData.currentRevenue || 'Not provided'}
Primary Challenge: ${formData.primaryChallenge || 'Not provided'}

Booking Source: ${source}
Time Zone: ${formData.timeZone}
`.trim();

      // Convert date and time to ISO format for Google Calendar
      const dateTime = new Date(`${selectedDate} ${selectedTime}`);
      const startTime = dateTime.toISOString().replace(/-|:|\.\d\d\d/g, '');
      const endTime = new Date(dateTime.getTime() + 30 * 60000).toISOString().replace(/-|:|\.\d\d\d/g, '');

      // Google Calendar URL
      const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(eventDetails)}&location=Video+Call+(Link+will+be+sent+via+email)`;

      // In a real implementation, send to your backend/CRM
      // For now, we'll simulate the booking
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Track booking in Google Analytics (if available)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'demo_booking_completed', {
          source: source,
          revenue_range: formData.currentRevenue,
          challenge: formData.primaryChallenge
        });
      }

      // Send confirmation email data (you'd send this to your backend)
      const bookingData = {
        ...formData,
        date: selectedDate,
        time: selectedTime,
        dateLabel: availableDates.find(d => d.value === selectedDate)?.label,
        source: source,
        timestamp: new Date().toISOString()
      };

      console.log('Demo Booking Data:', bookingData);
      console.log('Google Calendar URL:', calendarUrl);

      // Send booking to backend API
      const apiResponse = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (!apiResponse.ok) {
        const errorData = await apiResponse.json();
        throw new Error(errorData.error || 'Failed to book demo');
      }

      const responseData = await apiResponse.json();
      console.log('Booking API Response:', responseData);

      setStep('confirmed');
      toast.success('Demo booked successfully!');
      
      if (onSuccess) {
        onSuccess();
      }

      // Open Google Calendar to add event
      setTimeout(() => {
        window.open(calendarUrl, '_blank');
      }, 1000);

    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Failed to book demo. Please try again or email us at hello@nibbleiq.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'confirmed') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-slate-900 mb-4">Demo Request Received!</h3>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">
          We've received your demo request! Our team will send a calendar invite with a video call link to <span className="text-slate-900">{formData.email}</span> within 24 hours.
        </p>
        
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-5 h-5 text-orange-600" />
            <div className="text-left">
              <div className="text-slate-900">
                {availableDates.find(d => d.value === selectedDate)?.label}
              </div>
              <div className="text-sm text-slate-600">{selectedTime} (Your Local Time)</div>
            </div>
          </div>
          <div className="text-sm text-slate-600 text-left">
            Check your email for confirmation and next steps.
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-slate-600">
            In the meantime, check out our resources:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" asChild>
              <a href="/blog">Read Our Blog</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resources">Download Templates</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'details') {
    return (
      <div>
        <div className="mb-6">
          <button
            onClick={() => setStep('select')}
            className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1"
          >
            ← Change Date/Time
          </button>
          <div className="mt-3 p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar className="w-4 h-4" />
              <span>{availableDates.find(d => d.value === selectedDate)?.label}</span>
              <span className="text-slate-400">•</span>
              <Clock className="w-4 h-4" />
              <span>{selectedTime}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="pl-10"
                placeholder="John Smith"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="pl-10"
                placeholder="john@restaurant.com"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <div className="relative mt-1">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="pl-10"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="restaurantName">Restaurant Name *</Label>
            <div className="relative mt-1">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                id="restaurantName"
                type="text"
                required
                value={formData.restaurantName}
                onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
                className="pl-10"
                placeholder="The Golden Spoon"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="currentRevenue">Monthly Revenue (Optional)</Label>
            <select
              id="currentRevenue"
              value={formData.currentRevenue}
              onChange={(e) => setFormData({...formData, currentRevenue: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select range...</option>
              <option value="under-100k">Under $100K</option>
              <option value="100k-250k">$100K - $250K</option>
              <option value="250k-500k">$250K - $500K</option>
              <option value="500k-1m">$500K - $1M</option>
              <option value="over-1m">Over $1M</option>
            </select>
          </div>

          <div>
            <Label htmlFor="primaryChallenge">What's your biggest challenge? (Optional)</Label>
            <Textarea
              id="primaryChallenge"
              value={formData.primaryChallenge}
              onChange={(e) => setFormData({...formData, primaryChallenge: e.target.value})}
              className="mt-1"
              rows={3}
              placeholder="E.g., Managing food costs, tracking invoices, reducing waste..."
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Booking Your Demo...'
            ) : (
              <>
                Confirm Demo Booking
                <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            By booking, you agree to our <a href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</a>
          </p>
        </form>
      </div>
    );
  }

  // Step 1: Date and Time Selection
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-slate-900 mb-2">Select Your Demo Date</h3>
        <p className="text-sm text-slate-600 mb-4">
          All times shown in your local timezone ({formData.timeZone})
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {availableDates.map((date) => (
            <button
              key={date.value}
              onClick={() => handleDateSelect(date.value)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedDate === date.value
                  ? 'border-orange-500 bg-orange-50 text-orange-900'
                  : 'border-slate-200 hover:border-orange-300 text-slate-700'
              }`}
            >
              <div className="text-sm">{date.label}</div>
            </button>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div>
          <h3 className="text-slate-900 mb-3">Select Your Time</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-64 overflow-y-auto">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className="p-3 rounded-lg border-2 border-slate-200 hover:border-orange-500 hover:bg-orange-50 transition-all text-sm text-slate-700 hover:text-orange-900"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-3">
          <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="mb-1">What to expect in your 30-minute demo:</p>
            <ul className="space-y-1 text-blue-800">
              <li>• Personalized walkthrough with your data</li>
              <li>• See your actual profit leak opportunities</li>
              <li>• Custom setup plan for your restaurant</li>
              <li>• Q&A with a restaurant operations expert</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
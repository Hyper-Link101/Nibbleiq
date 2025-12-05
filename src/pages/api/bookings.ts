import type { NextApiRequest, NextApiResponse } from 'next';

type BookingData = {
  name: string;
  email: string;
  phone?: string;
  restaurantName: string;
  currentRevenue?: string;
  primaryChallenge?: string;
  date: string;
  time: string;
  dateLabel: string;
  timeZone: string;
  source: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const bookingData: BookingData = req.body;

    // Validate required fields
    if (!bookingData.name || !bookingData.email || !bookingData.restaurantName || !bookingData.date || !bookingData.time) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log('📅 Demo Booking Received:', {
      restaurant: bookingData.restaurantName,
      contact: bookingData.name,
      email: bookingData.email,
      datetime: `${bookingData.dateLabel} at ${bookingData.time}`,
      source: bookingData.source
    });

    // **OPTION 1: Email to yourself using a simple email service**
    // You'll need to set up environment variables:
    // - SMTP_HOST (e.g., smtp.gmail.com)
    // - SMTP_PORT (e.g., 587)
    // - SMTP_USER (your email)
    // - SMTP_PASS (app password)
    // - NOTIFICATION_EMAIL (hello@nibbleiq.com)

    // For now, we'll just log the booking and return success
    // In production, you'd integrate with:
    // 1. SendGrid/Mailgun/Resend for email
    // 2. Google Calendar API for calendar events
    // 3. Calendly/Cal.com webhook
    // 4. Your CRM (HubSpot, Salesforce, etc.)

    // Send notification to your team
    const notificationEmailBody = `
New Demo Booking Request

Restaurant: ${bookingData.restaurantName}
Contact Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone || 'Not provided'}

Scheduled Date: ${bookingData.dateLabel}
Scheduled Time: ${bookingData.time}
Time Zone: ${bookingData.timeZone}

Monthly Revenue: ${bookingData.currentRevenue || 'Not provided'}
Primary Challenge: ${bookingData.primaryChallenge || 'Not provided'}

Booking Source: ${bookingData.source}
Timestamp: ${new Date().toISOString()}

---
Action Required: Please send a calendar invite to ${bookingData.email} with a video call link.
    `.trim();

    // Log the notification email content
    console.log('📧 Notification Email Content:');
    console.log(notificationEmailBody);
    console.log('\n---\n');

    // Send confirmation to the customer
    const confirmationEmailBody = `
Hi ${bookingData.name.split(' ')[0]},

Thank you for booking a demo with NibbleIQ!

Your demo is scheduled for:
���� ${bookingData.dateLabel} at ${bookingData.time} (${bookingData.timeZone})

What happens next:
1. We'll send you a calendar invite with a video call link within 24 hours
2. You'll receive a reminder email 24 hours before your demo
3. Our team will prepare a personalized analysis for ${bookingData.restaurantName}

Questions before your demo? Reply to this email or contact us at hello@nibbleiq.com

We're excited to show you how NibbleIQ can help ${bookingData.restaurantName} reduce costs and save time!

Best,
The NibbleIQ Team
hello@nibbleiq.com
    `.trim();

    console.log('📧 Customer Confirmation Email Content:');
    console.log(`To: ${bookingData.email}`);
    console.log(confirmationEmailBody);
    console.log('\n---\n');

    // **TODO: Integrate with your email service here**
    // Example with Resend (recommended):
    // await resend.emails.send({
    //   from: 'NibbleIQ <bookings@nibbleiq.com>',
    //   to: bookingData.email,
    //   subject: `Demo Confirmed: ${bookingData.dateLabel} at ${bookingData.time}`,
    //   text: confirmationEmailBody
    // });

    // **TODO: Send notification to your team**
    // await resend.emails.send({
    //   from: 'NibbleIQ Bookings <bookings@nibbleiq.com>',
    //   to: 'hello@nibbleiq.com',
    //   subject: `New Demo: ${bookingData.restaurantName} - ${bookingData.dateLabel}`,
    //   text: notificationEmailBody
    // });

    // Return success
    res.status(200).json({ 
      success: true, 
      message: 'Booking received successfully',
      bookingId: `DEMO-${Date.now()}`,
      debug: {
        note: 'Emails are currently logged to console. Set up email service to send actual emails.',
        checkServerLogs: true
      }
    });

  } catch (error) {
    console.error('❌ Booking API Error:', error);
    res.status(500).json({ 
      error: 'Failed to process booking',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

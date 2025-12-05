import { useEffect } from 'react';

interface BookingSchemaProps {
  name?: string;
  date?: string;
  time?: string;
}

export function BookingSchema({ name, date, time }: BookingSchemaProps) {
  useEffect(() => {
    // Add structured data to page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Restaurant Management Software Demo",
      "provider": {
        "@type": "Organization",
        "name": "NibbleIQ",
        "url": "https://nibbleiq.ai",
        "logo": "https://nibbleiq.ai/logo.png",
        "description": "AI-Powered Restaurant Management Software",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "hello@nibbleiq.com",
          "contactType": "Sales",
          "availableLanguage": "English"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free 30-minute demo and 14-day trial",
        "availability": "https://schema.org/InStock"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": {
        "@type": "BusinessAudience",
        "name": "Restaurant Operators"
      }
    };

    // If booking is confirmed, add Event schema
    if (name && date && time) {
      const eventSchema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": `NibbleIQ Demo - ${name}`,
        "description": "Personalized demonstration of NibbleIQ restaurant management software",
        "startDate": `${date}T${convertTo24Hour(time)}:00`,
        "endDate": `${date}T${addMinutes(convertTo24Hour(time), 30)}:00`,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
          "@type": "VirtualLocation",
          "url": "https://nibbleiq.ai/demo"
        },
        "organizer": {
          "@type": "Organization",
          "name": "NibbleIQ",
          "url": "https://nibbleiq.ai"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      };
      
      script.innerHTML = JSON.stringify([structuredData, eventSchema]);
    } else {
      script.innerHTML = JSON.stringify(structuredData);
    }
    
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [name, date, time]);

  return null;
}

// Helper function to convert 12-hour to 24-hour format
function convertTo24Hour(time12h: string): string {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  
  if (hours === '12') {
    hours = '00';
  }
  
  if (modifier === 'PM') {
    hours = String(parseInt(hours, 10) + 12);
  }
  
  return `${hours.padStart(2, '0')}:${minutes || '00'}`;
}

// Helper function to add minutes to time
function addMinutes(time24h: string, minutesToAdd: number): string {
  const [hours, minutes] = time24h.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes + minutesToAdd;
  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;
  
  return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
}
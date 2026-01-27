const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vibebros.dev';

const eventSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Weekend Hackathon",
    "description": "48-hour coding marathon. Build anything, win prizes, and vibe with the community.",
    "startDate": "2026-02-01T09:00:00-05:00",
    "endDate": "2026-02-02T21:00:00-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": { "@type": "VirtualLocation", "url": "https://discord.gg/vibebros" },
    "organizer": { "@type": "Organization", "name": "VibeBros", "url": siteUrl },
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://discord.gg/vibebros" }
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Vibe Coding Session",
    "description": "Weekly live coding sessions with lo-fi beats and good vibes. All skill levels welcome.",
    "startDate": "2026-02-07T19:00:00-05:00",
    "endDate": "2026-02-07T22:00:00-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": { "@type": "VirtualLocation", "url": "https://discord.gg/vibebros" },
    "organizer": { "@type": "Organization", "name": "VibeBros", "url": siteUrl },
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://discord.gg/vibebros" }
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Web3 Workshop",
    "description": "Deep dive into Web3 development. Build your first dApp with hands-on guidance.",
    "startDate": "2026-02-10T18:00:00-05:00",
    "endDate": "2026-02-10T20:00:00-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": { "@type": "VirtualLocation", "url": "https://discord.gg/vibebros" },
    "organizer": { "@type": "Organization", "name": "VibeBros", "url": siteUrl },
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://discord.gg/vibebros" }
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is VibeBros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VibeBros is a thriving community of 250+ developers, designers, gamers, and creators who are passionate about building innovative projects together. We host weekly hackathons, daily coding sessions, Web3 workshops, and maintain a 24/7 active Discord server where members collaborate, learn, and grow together."
      }
    },
    {
      "@type": "Question",
      "name": "How do I join VibeBros?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Joining VibeBros is easy and free! Simply click the 'Join Discord Server' button on our homepage to access our community. Once inside, introduce yourself in the welcome channel, and you'll immediately have access to all our events, resources, and collaborative spaces. No experience level required—we welcome everyone from beginners to experts."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of events does VibeBros host?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We host a variety of events designed for all skill levels: Weekend Hackathons (48-hour coding marathons with prizes), Weekly Vibe Coding Sessions (live coding with lo-fi beats every Friday), Web3 Workshops (hands-on blockchain and dApp development), Daily Study Groups, and Project Showcases. All events are free and conducted virtually on our Discord server."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be an experienced developer to join?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all! VibeBros welcomes developers of all skill levels—from complete beginners writing their first line of code to seasoned engineers exploring new technologies. Our community thrives on knowledge sharing, and experienced members actively help newcomers learn and grow."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any costs or membership fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No! VibeBros is completely free to join and participate in. All our events, workshops, coding sessions, and community resources are provided at no cost. We believe in making technology education and collaboration accessible to everyone."
      }
    }
  ]
};

const teamSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "William",
    "jobTitle": "Founder & Lead Vibe Architect",
    "description": "Full-stack developer with a passion for building communities.",
    "worksFor": { "@type": "Organization", "name": "VibeBros" },
    "url": siteUrl,
    "sameAs": ["https://github.com/VibeBros-Community", "https://twitter.com", "https://linkedin.com"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jesse Pinkman",
    "jobTitle": "Community Lead & Designer",
    "description": "UX designer turned community builder.",
    "worksFor": { "@type": "Organization", "name": "VibeBros" },
    "url": siteUrl,
    "sameAs": ["https://github.com/VibeBros-Community", "https://twitter.com", "https://linkedin.com"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Max",
    "jobTitle": "Head of Content & Streams",
    "description": "Live coding enthusiast and educator.",
    "worksFor": { "@type": "Organization", "name": "VibeBros" },
    "url": siteUrl,
    "sameAs": ["https://github.com/VibeBros-Community", "https://twitter.com"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "J35",
    "jobTitle": "DevOps & Infrastructure",
    "description": "Cloud architecture expert and automation wizard.",
    "worksFor": { "@type": "Organization", "name": "VibeBros" },
    "url": siteUrl,
    "sameAs": ["https://github.com/VibeBros-Community", "https://linkedin.com"]
  }
];

export function StructuredData() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Event Schemas */}
      {eventSchemas.map((schema, index) => (
        <script
          key={'event-' + index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Person Schemas */}
      {teamSchemas.map((schema, index) => (
        <script
          key={'person-' + index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

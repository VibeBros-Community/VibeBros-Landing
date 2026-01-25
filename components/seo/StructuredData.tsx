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

const teamSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Willian",
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
      {eventSchemas.map((schema, index) => (
        <script
          key={'event-' + index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
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

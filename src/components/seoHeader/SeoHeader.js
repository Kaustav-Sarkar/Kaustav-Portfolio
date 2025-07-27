import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  let mail = socialMediaLinks
    .find((media) => media.link.startsWith("mailto"))
    ?.link.substring("mailto:".length);
  let job = experience.sections
    ?.find((section) => section.work)
    ?.experiences?.at(0);

  let credentials = [];
  certifications.certifications.forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });

  const personData = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    alternateName: greeting.nickname,
    description: seo.description,
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs: sameAs,
    jobTitle: job?.title || "Senior Backend Engineer",
    worksFor: {
      "@type": "Organization",
      name: job?.company || "Cloudera",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    hasCredential: credentials,
    knowsAbout: [
      "Java Development",
      "Go Programming",
      "Kubernetes",
      "Docker",
      "Spring Boot",
      "Microservices Architecture",
      "Cloud Infrastructure",
      "Distributed Systems",
      "Uber Cadence",
      "JPA/Hibernate",
      "PostgreSQL",
      "AWS",
      "Backend Engineering",
      "API Design",
      "System Architecture"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Manipal Institute of Technology"
    },
    image: "https://kaustav-sarkar.com/images/kaustav.jpeg"
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kaustav Sarkar Portfolio",
    alternateName: "Kaustav's Portfolio",
    url: seo?.og?.url,
    description: seo.description,
    publisher: {
      "@type": "Person",
      name: greeting.title
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: seo?.og?.url + "?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const data = [personData, websiteData];
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;

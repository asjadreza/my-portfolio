import React from "react";

export default function Head() {
  const siteUrl = "https://asjadreza.dev"; // Replace with your real domain
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Asjad Reza",
    url: siteUrl,
    jobTitle: "Full-stack Developer",
    description:
      "Portfolio of Asjad Reza — Full-stack developer building web applications with Next.js, React and TypeScript.",
    sameAs: [
      "https://github.com/asjadreza",
      "https://www.linkedin.com/in/asjadreza"
    ]
  };

  return (
    <>
      <link rel="canonical" href={siteUrl} />
      <meta name="author" content="Asjad Reza" />
      <meta name="theme-color" content="#111827" />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

import { SiteConfig } from "@/content/types";
export default function ContactForm({
  siteConfig,
}: {
  siteConfig: SiteConfig;
}) {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <p className="mb-4 text-gray-700">
          Email:{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-blue-600 underline"
          >
            {siteConfig.contact.email}
          </a>
        </p>
        {siteConfig.contact.phone && (
          <p className="mb-2 text-gray-700">
            Phone: {siteConfig.contact.phone}
          </p>
        )}
        {siteConfig.contact.location && (
          <p className="mb-2 text-gray-700">
            Location: {siteConfig.contact.location}
          </p>
        )}
        <div className="flex gap-4 mt-4">
          {siteConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

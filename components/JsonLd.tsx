// Structured data (schema.org JSON-LD), rendered the way the Next.js App Router
// docs recommend: a plain <script> tag in the server component, with "<"
// escaped so page content can't break out of the tag.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

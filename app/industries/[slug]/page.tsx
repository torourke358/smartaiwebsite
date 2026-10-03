import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Todo from "@/components/Todo";
import { getIndustry, industries } from "@/lib/industries";
import { calHref, siteName, siteUrl } from "@/lib/site";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.description,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.title} | ${siteName}`,
      description: industry.description,
      url: `/industries/${industry.slug}`,
    },
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${siteUrl}/industries` },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
        item: `${siteUrl}/industries/${industry.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />

      <section className="bg-navy/5">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-wide text-navy/60">
            <Link href="/industries" className="hover:text-navy">
              Industries
            </Link>{" "}
            / {industry.name}
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {industry.h1}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            {industry.intro}
          </p>
          <Link
            href={calHref}
            className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-accent-dark"
          >
            Book a Free Call
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Where the time goes today
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {industry.painPoints.map((pain) => (
            <div
              key={pain.title}
              className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold">{pain.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/80">{pain.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">What we automate</h2>
            <ul className="mt-6 space-y-3 text-lg leading-relaxed text-navy/80">
              {industry.automations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-accent" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-navy/70">
              The free call decides which of these fit your business. The
              automations run on Claude AI and are reviewed by a person.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Tim&rsquo;s experience
            </h2>
            <ul className="mt-6 space-y-3 text-lg leading-relaxed text-navy/80">
              {industry.experience.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-accent" aria-hidden="true">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-6 inline-block font-semibold text-navy underline-offset-4 hover:underline"
            >
              More about Tim →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">What it costs</h2>
        <p className="mt-6 text-lg leading-relaxed text-navy/80">
          Setup is a one-time <strong>$2,500</strong> per business. Upkeep is
          optional and starts at <strong>$175/month</strong> for about an hour
          of upkeep a month. If you also want the bookkeeping done for you,
          that work starts at <strong>$175/month</strong>.{" "}
          <Link href="/pricing" className="font-semibold underline-offset-4 hover:underline">
            See pricing
          </Link>
          .
        </p>
        {industry.quote && (
          <figure className="mt-10 rounded-xl border border-navy/10 bg-navy/5 p-8">
            <blockquote className="text-lg leading-relaxed text-navy">
              &ldquo;{industry.quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm text-navy/70">
              <span className="font-bold text-navy">{industry.quote.name}</span>
              <br />
              {industry.quote.role}
            </figcaption>
          </figure>
        )}
        {industry.testimonialTodo && (
          <div className="mt-8">
            <Todo>{industry.testimonialTodo}</Todo>
          </div>
        )}
      </section>

      <CtaBand />
    </>
  );
}

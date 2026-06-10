import Image from "next/image";

type ScreenshotProps = {
  file: string; // file name inside /public/images
  alt: string;
  aspect?: "phone" | "wide";
};

// Gray "screenshot coming" placeholder. The PNG files in /public/images are
// transparent placeholders, so the label shows through. Drop a real screenshot
// over the same file name and it covers the label — no code changes needed.
export default function Screenshot({ file, alt, aspect = "wide" }: ScreenshotProps) {
  return (
    <figure
      className={`relative w-full overflow-hidden rounded-xl border-2 border-dashed border-navy/20 bg-navy/5 ${
        aspect === "phone" ? "mx-auto aspect-[9/19] max-w-[280px]" : "aspect-[16/10]"
      }`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-4 text-center">
        <span className="text-sm font-semibold text-navy/50">Screenshot coming</span>
        <span className="text-xs text-navy/40">/images/{file}</span>
      </div>
      <Image
        src={`/images/${file}`}
        alt={alt}
        fill
        className="object-cover"
        sizes={aspect === "phone" ? "280px" : "(max-width: 768px) 100vw, 600px"}
      />
    </figure>
  );
}

// Responsive demo video embed for the home page.
// TODO: replace YOUTUBE_VIDEO_ID with the real demo video ID.
const youtubeId = "";

export default function VideoEmbed() {
  if (!youtubeId) {
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-navy/20 bg-navy/5 text-center">
        <span className="text-lg font-semibold text-navy/50">Demo video coming</span>
        <span className="text-sm text-navy/40">
          Set the YouTube ID in components/VideoEmbed.tsx
        </span>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        title="Smart AI Automations demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

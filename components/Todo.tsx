// Visible placeholder for content only Tim can supply (testimonials, prices,
// results). Deliberately loud so it can't slip into production unnoticed —
// search the codebase for "<Todo" to find every one.
export default function Todo({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border-2 border-dashed border-accent bg-accent/10 p-4 text-sm font-medium text-navy">
      TODO (Tim): {children}
    </div>
  );
}

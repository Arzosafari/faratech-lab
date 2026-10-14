/**
 * Editorial chapter marker — a numbered label with a fine rule.
 * Used to mark sections as chapters in the homepage narrative.
 */
export default function ChapterLabel({ number, label, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`font-display text-sm font-semibold ${
          light ? 'text-electric' : 'text-electric'
        }`}
      >
        {number}
      </span>
      <span
        className={`h-px w-8 ${light ? 'bg-border-d' : 'bg-border-l'}`}
      />
      <span className={`label ${light ? '!text-steel-light' : ''}`}>{label}</span>
    </div>
  )
}

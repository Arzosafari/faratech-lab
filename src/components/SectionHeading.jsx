export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`${alignment} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-body leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

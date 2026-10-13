export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`${alignment} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow mb-4 ${light ? '!text-brand-light' : ''}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`heading-2 ${light ? '!text-white' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-body'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

const items = [
  'Web Design',
  'Custom Software',
  'AI Solutions',
  'Automation',
  'Strategy',
  'UI / UX',
  'Intelligent Systems',
  'Digital Products',
]

export default function Ticker() {
  const row = [...items, ...items]

  return (
    <section
      className="relative overflow-hidden border-y border-line bg-ink-deep py-5"
      aria-label="Our disciplines"
    >
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-7 px-7">
            <span className="label whitespace-nowrap !text-mist-dim">{item}</span>
            <span className="text-base leading-none text-ember">+</span>
          </span>
        ))}
      </div>
    </section>
  )
}

export default function PageHero({ label, title, intro, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink-radial">
      <div className="pointer-events-none absolute -top-44 right-[-12%] h-[440px] w-[440px] rounded-full bg-flare blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />

      <div className="container-content relative pb-16 pt-36 md:pb-24 md:pt-44">
        <p className="label">{label}</p>
        <h1 className="display-sm mt-8 max-w-3xl">{title}</h1>
        {intro && <p className="lead mt-6 max-w-xl">{intro}</p>}
        {children}
      </div>
    </section>
  )
}

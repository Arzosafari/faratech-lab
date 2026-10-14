import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-midnight text-white hover:bg-deep-blue transition-colors duration-200',
  electric: 'bg-electric text-white hover:bg-electric-hover transition-colors duration-200',
  outline:
    'border border-border-l text-midnight hover:bg-midnight hover:text-white hover:border-midnight transition-all duration-200',
  outlineLight:
    'border border-white/20 text-white hover:bg-white hover:text-midnight hover:border-white transition-all duration-200',
  ghost: 'text-midnight hover:text-electric transition-colors duration-200',
  ghostLight: 'text-white/70 hover:text-white transition-colors duration-200',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

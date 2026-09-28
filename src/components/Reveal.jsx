import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 22,
  className,
  ...rest
}) {
  const reduced = useReducedMotion()
  const Component = typeof as === 'string' ? motion[as] : as

  if (reduced) {
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    )
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}

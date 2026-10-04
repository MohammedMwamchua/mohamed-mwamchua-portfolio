// Renders a Simple Icons brand mark (https://simpleicons.org) in the current text colour.
export default function BrandIcon({ icon, size = 16, title, ...rest }) {
  if (!icon) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
      focusable="false"
      {...rest}
    >
      <path d={icon.path} />
    </svg>
  )
}

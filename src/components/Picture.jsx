// Renders the `as=picture` output from vite-imagetools: AVIF and WebP sources
// with a JPEG fallback, all at several widths.
export default function Picture({ image, alt, sizes, priority = false, className }) {
  const { sources, img } = image
  return (
    <picture className={className}>
      {Object.entries(sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={img.src}
        width={img.w}
        height={img.h}
        alt={alt}
        decoding="async"
        loading={priority ? undefined : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
      />
    </picture>
  )
}

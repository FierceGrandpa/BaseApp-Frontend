export function IconBase(props) {
  const {
    attr, size, title, color, className, style, children, ...svgProps
  } = props;
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      {...attr}
      {...svgProps}
      className={className ? `icon ${className}` : 'icon'}
      style={{ color: color || 'white', ...style }}
      height={size || '1em'}
      width={size || '1em'}
    >
      {title && (<title>{title}</title>)}
      {children}
    </svg>
  );
}

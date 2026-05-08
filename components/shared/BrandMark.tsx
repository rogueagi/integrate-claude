interface Props {
  className?: string;
}

/**
 * Integrate Claude brand glyph.
 * Renders in `currentColor` so it inherits text color from its parent.
 * Aspect ratio is 3:4 (width:height) — pair with `h-X w-auto` for clean sizing.
 */
export function BrandMark({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 400"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 31 184 L 74 215 L 31 246"
        fill="none"
        stroke="currentColor"
        strokeWidth="23"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="89" y="120" width="68" height="160" rx="6" fill="currentColor" />
    </svg>
  );
}

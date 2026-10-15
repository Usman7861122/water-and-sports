/** Soft wave layers for the bottom of blue sections (same style as the Contact section). */
export default function Waves() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 w-full sm:h-40 lg:h-48"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 90c200 60 420 70 700 20s520-60 740 10V200H0z" fill="#fff" fillOpacity="0.16" />
      <path d="M0 120c240-80 480-80 720-10s480 70 720-30V200H0z" fill="#fff" fillOpacity="0.3" />
    </svg>
  );
}

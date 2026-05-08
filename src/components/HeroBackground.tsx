/**
 * Hero background:
 * - Soft sky-blue gradient at top fading to pure white at the bottom
 * - Subtle navy/blue dot-grid overlay at low opacity
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Sky-blue → white gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #DBEAFE 0%, #E0F2FE 30%, #FFFFFF 100%)",
        }}
      />
      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30, 58, 138, 0.55) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.09,
        }}
      />
    </div>
  );
}

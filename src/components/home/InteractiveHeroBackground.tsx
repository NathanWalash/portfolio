export function InteractiveHeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute -inset-10 opacity-70 transition-transform duration-500 ease-out [background-image:radial-gradient(circle,oklch(0.53_0.1_300_/_0.28)_1px,transparent_1.7px)] [background-size:18px_18px] [transform:translate3d(var(--hero-far-x,0px),var(--hero-far-y,0px),0)]" />
      <div className="absolute -inset-14 opacity-60 transition-transform duration-500 ease-out [background-image:radial-gradient(circle,oklch(0.62_0.2_305_/_0.52)_1.35px,transparent_2.1px)] [background-size:28px_28px] [transform:translate3d(var(--hero-mid-x,0px),var(--hero-mid-y,0px),0)]" />
      <div className="absolute -inset-20 opacity-50 transition-transform duration-500 ease-out [background-image:radial-gradient(circle,oklch(0.54_0.24_296_/_0.68)_1.9px,transparent_2.9px)] [background-size:46px_46px] [transform:translate3d(var(--hero-near-x,0px),var(--hero-near-y,0px),0)]" />
      <div className="absolute -inset-16 opacity-95 transition-transform duration-500 ease-out [background-image:radial-gradient(circle,oklch(0.72_0.24_310_/_0.86)_1.8px,transparent_2.7px)] [background-size:24px_24px] [mask-image:radial-gradient(circle_at_var(--hero-x,58%)_var(--hero-y,38%),black_0%,black_24%,transparent_55%)] [transform:translate3d(var(--hero-near-x,0px),var(--hero-near-y,0px),0)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_68%,var(--background)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-border/80" />
    </div>
  )
}

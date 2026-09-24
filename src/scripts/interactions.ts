// Scroll reveal
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Count up numbers
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const countIO = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    const el = e.target as HTMLElement;
    countIO.unobserve(el);
    const target = Number(el.dataset.count);
    if (reduce || !target) { el.textContent = String(target); continue; }
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}, { threshold: 0.6 });
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countIO.observe(el));

// Header state
const header = document.querySelector('.site-header');
const onScroll = () => header?.classList.toggle('is-scrolled', scrollY > 24);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});
document.querySelectorAll('.mobile-nav a').forEach((a) =>
  a.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }),
);

// Journey progress line
const journey = document.querySelector<HTMLElement>('[data-journey]');
if (journey) {
  const steps = journey.querySelectorAll<HTMLElement>('.journey-step');
  const update = () => {
    const r = journey.getBoundingClientRect();
    const vh = innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
    journey.style.setProperty('--progress', p.toFixed(3));
    steps.forEach((s) => {
      const sr = s.getBoundingClientRect();
      s.classList.toggle('is-active', sr.top < vh * 0.62);
    });
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}

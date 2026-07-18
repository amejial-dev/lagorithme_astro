/**
 * Intercepts same-site link clicks and plays the mascot walking
 * overlay for a beat before the browser actually navigates, so
 * page-to-page transitions feel intentional instead of an abrupt
 * white flash. Pure vanilla DOM — no framework runtime required.
 */

const WALK_DURATION_MS = 800;
const SLIDE_DURATION_MS = 2400;

function isInternalNavigableLink(anchor: HTMLAnchorElement): boolean {
  const href = anchor.getAttribute('href');
  if (!href || href === '#') return false;
  if (href.startsWith('http://') || href.startsWith('https://')) return false;
  if (href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  if (anchor.target === '_blank') return false;
  return true;
}

function samePage(href: string): boolean {
  const current = window.location.pathname.replace(/\/$/, '') || '/';
  const dest = new URL(href, window.location.href).pathname.replace(/\/$/, '') || '/';
  return current === dest;
}

function initPageTransition() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  let isNavigating = false;

  document.addEventListener(
    'click',
    (event) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a[href]');
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;
      if (!isInternalNavigableLink(anchor)) return;

      const href = anchor.getAttribute('href')!;
      if (samePage(href)) return;

      if (isNavigating) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      isNavigating = true;
      loader.classList.add('is-active');

      window.setTimeout(() => {
        window.location.href = href;
      }, SLIDE_DURATION_MS);
    },
    true,
  );

  window.addEventListener('pageshow', () => {
    isNavigating = false;
    loader.classList.remove('is-active');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPageTransition);
} else {
  initPageTransition();
}

// Keep durations referenced so they stay documented alongside their
// CSS custom-property counterparts in PageLoader.astro.
export { WALK_DURATION_MS, SLIDE_DURATION_MS };

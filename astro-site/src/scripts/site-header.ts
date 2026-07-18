/**
 * Mobile hamburger toggle for SiteHeader.astro. Kept out of the
 * component so the open/close logic can be reused independent of
 * markup, matching page-transition.ts's pattern.
 */

const DESKTOP_BREAKPOINT = 992;

function initSiteHeaderToggle() {
  const toggle = document.getElementById('site-header-toggle');
  const nav = document.getElementById('site-header-mobile-nav');
  if (!toggle || !nav) return;

  function closeMenu() {
    toggle!.setAttribute('aria-expanded', 'false');
    nav!.classList.remove('is-open');
  }

  function openMenu() {
    toggle!.setAttribute('aria-expanded', 'true');
    nav!.classList.add('is-open');
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener('click', (event) => {
    const target = event.target as Node;
    if (!nav.contains(target) && !toggle.contains(target)) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > DESKTOP_BREAKPOINT) closeMenu();
  });
}

function initSiteHeaderScrollState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function updateScrollState() {
    header!.classList.toggle('is-scrolled', window.scrollY > 0);
  }

  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });
}

function initSiteHeader() {
  initSiteHeaderToggle();
  initSiteHeaderScrollState();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteHeader);
} else {
  initSiteHeader();
}

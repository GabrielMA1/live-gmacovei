(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const savedTheme = localStorage.getItem('gmacovei-theme');
  const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  const initial = savedTheme || preferred;
  root.dataset.theme = initial;

  const syncThemeIcon = () => {
    if (!themeToggle) return;
    const light = root.dataset.theme === 'light';
    themeToggle.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    themeToggle.innerHTML = `<i class="fa-solid ${light ? 'fa-moon' : 'fa-sun'}" aria-hidden="true"></i>`;
  };
  syncThemeIcon();

  themeToggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('gmacovei-theme', root.dataset.theme);
    syncThemeIcon();
  });

  const header = document.querySelector('.site-header');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');
  const closeMenu = () => {
    mobilePanel?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  };
  menuButton?.addEventListener('click', () => {
    const open = !mobilePanel?.classList.contains('open');
    mobilePanel?.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
  mobilePanel?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  const faqItems = [...document.querySelectorAll('[data-faq]')];
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    button?.addEventListener('click', () => {
      const willOpen = !item.classList.contains('open');
      faqItems.forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  requestAnimationFrame(() => document.body.classList.add('page-ready'));

  const revealItems = document.querySelectorAll('.reveal');
  revealItems.forEach((el, index) => {
    const siblings = [...(el.parentElement?.children || [])].filter(child => child.classList?.contains('reveal'));
    const position = Math.max(0, siblings.indexOf(el));
    el.style.setProperty('--reveal-delay', `${Math.min(position * 85, 255)}ms`);
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(el => observer.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('visible'));
  }

  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(btn => btn.classList.toggle('active', btn === button));
      document.querySelectorAll('[data-category]').forEach(card => {
        card.hidden = value !== 'all' && card.dataset.category !== value;
      });
    });
  });

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();

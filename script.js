/* ==========================================================================
   JUST BANÚS - SCRIPT ENGINE MULTI-PAGE & NAVIGATION CONTROLLER
   ========================================================================== */

let currentLang = 'en';

function setLanguage(lang) {
  if (!['es', 'en'].includes(lang)) lang = 'en';
  currentLang = lang;
  
  try {
    localStorage.setItem('justbanus_lang_v2', lang);
  } catch (e) {
    console.warn('Storage not accessible:', e);
  }

  // Update HTML lang tag
  document.documentElement.lang = lang;

  // Toggle active flag button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
  
  // Update innerHTML of elements with data-i18n
  if (typeof i18n !== 'undefined' && i18n[lang]) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (i18n[lang][key] !== undefined) {
        el.innerHTML = i18n[lang][key];
      }
    });

    // Update placeholders for inputs/textareas with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (i18n[lang][key] !== undefined) {
        el.placeholder = i18n[lang][key];
      }
    });

    // Update titles for elements with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      if (i18n[lang][key] !== undefined) {
        el.title = i18n[lang][key];
      }
    });
  }

  updateNavigationLabel();

  if (typeof updateCalc === 'function') {
    updateCalc();
  }
}

function updateCalc() {
  const type = document.getElementById('calc-type')?.value || 'apt';
  const beds = parseInt(document.getElementById('calc-beds')?.value || 2);
  const occ = parseInt(document.getElementById('calc-occ')?.value || 70);

  let baseRate = 220;
  if (type === 'penthouse') baseRate = 380;
  if (type === 'villa') baseRate = 750;

  const rate = baseRate * (1 + (beds - 1) * 0.3);
  const days = Math.round(365 * (occ / 100));
  const total = Math.round(days * rate);

  const locale = currentLang === 'en' ? 'en-GB' : 'es-ES';
  const formatted = new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(total);
  const resEl = document.getElementById('calc-res');
  if (resEl) resEl.textContent = formatted;
}

function initFAQ() {
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const active = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!active) item.classList.add('active');
    });
  });
}

function openModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.classList.add('active');
  } else {
    window.location.href = 'contacto.html';
  }
}

function closeModal() {
  document.getElementById('contact-modal')?.classList.remove('active');
}

function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  
  if (toggleBtn && drawer) {
    drawer.id = drawer.id || 'mobile-navigation';
    toggleBtn.type = 'button';
    toggleBtn.setAttribute('aria-controls', drawer.id);
    toggleBtn.setAttribute('aria-expanded', 'false');

    const setOpen = (open, restoreFocus = false) => {
      drawer.classList.toggle('active', open);
      drawer.hidden = !open;
      drawer.style.display = open ? 'flex' : 'none';
      toggleBtn.setAttribute('aria-expanded', String(open));
      updateNavigationLabel();
      if (restoreFocus) toggleBtn.focus();
    };
    setOpen(false);

    toggleBtn.addEventListener('click', () => {
      const open = toggleBtn.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
      if (open) drawer.querySelector('a, button')?.focus();
    });

    drawer.addEventListener('click', (event) => {
      if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && drawer.classList.contains('active')) {
        event.preventDefault();
        setOpen(false, true);
      }
    });

    document.addEventListener('click', (event) => {
      if (!drawer.contains(event.target) && !toggleBtn.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener('focusin', (event) => {
      if (!drawer.contains(event.target) && !toggleBtn.contains(event.target)) {
        setOpen(false);
      }
    });

    window.matchMedia('(min-width: 1181px)').addEventListener('change', (event) => {
      if (event.matches) {
        const focusWasInDrawer = drawer.contains(document.activeElement);
        setOpen(false);
        if (focusWasInDrawer) document.querySelector('.nav-menu .nav-link.active, .logo-wrapper')?.focus();
      }
    });
  }

  // Active navigation highlight
  const rawPath = window.location.pathname.split('/').pop();
  const path = (!rawPath || rawPath === '' || rawPath === '/') ? 'index.html' : rawPath;
  document.querySelectorAll('.nav-menu .nav-link, .mobile-drawer .nav-link').forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
    const href = link.getAttribute('href');
    const cleanHref = href ? href.split('?')[0].split('#')[0] : '';
    if (cleanHref === path) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else if (path === 'servicios.html' && cleanHref === 'propietarios.html') {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function updateNavigationLabel() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  if (!toggleBtn) return;
  const open = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-label', currentLang === 'en'
    ? (open ? 'Close navigation' : 'Open navigation')
    : (open ? 'Cerrar menú' : 'Abrir menú'));
}

function initReveal() {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || motionPreference.matches) return;

  const items = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

  items.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight) return;
    observer.observe(item);
    item.classList.add('reveal-pending');
  });

  motionPreference.addEventListener('change', (event) => {
    if (!event.matches) return;
    items.forEach((item) => item.classList.add('is-visible'));
    observer.disconnect();
  });
}

function initContactForm() {
  const form = document.getElementById('whatsapp-contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const values = new FormData(form);
      const english = currentLang === 'en';
      const service = form.elements.service?.selectedOptions[0]?.textContent.trim() || '';
      const message = [
        english ? 'Hello Just Banús, I would like to request a property service.' : 'Hola Just Banús, me gustaría solicitar un servicio para mi propiedad.',
        '',
        `${english ? 'Name' : 'Nombre'}: ${String(values.get('name')).trim()}`,
        `${english ? 'Service' : 'Servicio'}: ${service}`,
      ];
      const email = String(values.get('email') || '').trim();
      const phone = String(values.get('phone') || '').trim();
      if (email) message.push(`Email: ${email}`);
      if (phone) message.push(`${english ? 'Phone' : 'Teléfono'}: ${phone}`);
      message.push('', String(values.get('text')).trim());

      window.location.assign(`https://wa.me/34649743685?text=${encodeURIComponent(message.join('\n'))}`);
    });
  }

  // Owner Consultation Form on Home Page (PDF page 8)
  const consultForm = document.getElementById('owner-consultation-whatsapp-form');
  if (consultForm) {
    consultForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!consultForm.reportValidity()) return;

      const values = new FormData(consultForm);
      const english = currentLang === 'en';
      const lines = [
        english
          ? 'Hello Just Banús / Serinamar Group, I would like to request an Owner Consultation.'
          : 'Hola Just Banús / Serinamar Group, me gustaría solicitar una Consulta para Propietarios.',
        '',
        `${english ? 'Name' : 'Nombre'}: ${String(values.get('name') || '').trim()}`,
        `Email: ${String(values.get('email') || '').trim()}`,
        `${english ? 'Phone' : 'Teléfono'}: ${String(values.get('phone') || '').trim()}`,
        `${english ? 'Property location' : 'Ubicación'}: ${String(values.get('location') || '').trim()}`,
        `${english ? 'Property type' : 'Tipo de propiedad'}: ${String(values.get('property_type') || '').trim()}`,
        `${english ? 'Number of bedrooms' : 'Dormitorios'}: ${String(values.get('bedrooms') || '').trim()}`
      ];
      const msg = String(values.get('message') || '').trim();
      if (msg) {
        lines.push('', `${english ? 'Message' : 'Mensaje'}: ${msg}`);
      }

      window.location.assign(`https://wa.me/34649743685?text=${encodeURIComponent(lines.join('\n'))}`);
    });
  }
}

window.addEventListener('scroll', () => {
  const headerWrap = document.querySelector('.site-header-wrap, .navbar');
  if (window.scrollY > 30) headerWrap?.classList.add('scrolled');
  else headerWrap?.classList.remove('scrolled');
});

document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('justbanus_lang_v2') || 'en';
  } catch (e) {
    savedLang = 'en';
  }

  setLanguage(savedLang);
  initNavigation();
  initFAQ();
  initContactForm();
  initReveal();

  document.getElementById('calc-type')?.addEventListener('change', updateCalc);
  document.getElementById('calc-beds')?.addEventListener('change', updateCalc);
  document.getElementById('calc-occ')?.addEventListener('input', (e) => {
    const valEl = document.getElementById('occ-val');
    if (valEl) valEl.textContent = e.target.value + '%';
    updateCalc();
  });
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});

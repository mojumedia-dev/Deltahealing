/* ============================================ */
/* DELTA HEALING SOLUTIONS - MODERN DESIGN JS */
/* Paste in: Code Injection > FOOTER wrapped in <script> tags */
/* ============================================ */

document.addEventListener("DOMContentLoaded", function() {

  /* ============================================ */
  /* SMOOTH SCROLL ANIMATIONS */
  /* ============================================ */
  
  // Add fade-in class to content blocks
  const animateOnScroll = function() {
    const blocks = document.querySelectorAll('.sqs-block, .page-section');
    
    blocks.forEach(block => {
      if (!block.classList.contains('fade-in') && !block.classList.contains('no-animate')) {
        block.classList.add('fade-in');
      }
    });
    
    // Intersection Observer for fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  };
  
  // Run animations
  animateOnScroll();

  /* ============================================ */
  /* SHRINKING HEADER ON SCROLL */
  /* ============================================ */
  
  let lastScroll = 0;
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }
      
      lastScroll = currentScroll;
    });
  }

  /* ============================================ */
  /* SMOOTH SCROLLING FOR ANCHOR LINKS */
  /* ============================================ */
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Don't prevent default for empty hashes or non-ID hashes
      if (href === '#' || href.indexOf('#') !== 0) return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ============================================ */
  /* AUTO-ENHANCE PHONE NUMBERS */
  /* ============================================ */
  
  function enhancePhoneNumbers() {
    const phonePattern = /(\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/g;
    
    // Find text nodes containing phone numbers
    function walkTextNodes(node) {
      if (node.nodeType === 3) { // Text node
        const text = node.textContent;
        if (phonePattern.test(text) && !node.parentElement.closest('a[href^="tel:"]')) {
          const span = document.createElement('span');
          span.innerHTML = text.replace(phonePattern, '<a href="tel:+1$1" class="phone-link">$1</a>');
          node.parentNode.replaceChild(span, node);
        }
      } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE' && node.nodeName !== 'A') {
        node.childNodes.forEach(walkTextNodes);
      }
    }
    
    // Apply to main content areas only
    document.querySelectorAll('.sqs-block-content, .page-section').forEach(walkTextNodes);
  }
  
  enhancePhoneNumbers();

  /* ============================================ */
  /* PARALLAX EFFECT FOR IMAGES (Subtle) */
  /* ============================================ */
  
  const parallaxImages = document.querySelectorAll('.sqs-block-image.parallax-enabled img');
  
  if (parallaxImages.length > 0 && window.innerWidth > 768) {
    window.addEventListener('scroll', function() {
      parallaxImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const yPos = -(scrolled * 0.15);
          img.style.transform = `translateY(${yPos}px)`;
        }
      });
    });
  }

  /* ============================================ */
  /* LAZY LOADING ENHANCEMENT */
  /* ============================================ */
  
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '100px'
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  /* ============================================ */
  /* FORM VALIDATION ENHANCEMENT */
  /* ============================================ */
  
  const forms = document.querySelectorAll('.sqs-block-form form');
  
  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      // Add floating label effect
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', function() {
        if (!this.value) {
          this.parentElement.classList.remove('focused');
        }
      });
      
      // Real-time validation
      if (input.type === 'email') {
        input.addEventListener('blur', function() {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (this.value && !emailPattern.test(this.value)) {
            this.classList.add('error');
            showError(this, 'Please enter a valid email address');
          } else {
            this.classList.remove('error');
            hideError(this);
          }
        });
      }
      
      if (input.type === 'tel') {
        input.addEventListener('blur', function() {
          const phonePattern = /^[\d\s\-\(\)\.]+$/;
          if (this.value && !phonePattern.test(this.value)) {
            this.classList.add('error');
            showError(this, 'Please enter a valid phone number');
          } else {
            this.classList.remove('error');
            hideError(this);
          }
        });
      }
    });
  });
  
  function showError(input, message) {
    let errorDiv = input.parentElement.querySelector('.error-message');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.style.cssText = 'color: #d32f2f; font-size: 0.875rem; margin-top: 0.5rem;';
      input.parentElement.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
  }
  
  function hideError(input) {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  /* ============================================ */
  /* MOBILE MENU ENHANCEMENTS */
  /* ============================================ */
  
  const mobileMenuToggle = document.querySelector('.burger-button, .header-burger-btn');
  const mobileMenu = document.querySelector('.header-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      document.body.classList.toggle('mobile-menu-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.header-menu') && !e.target.closest('.burger-button, .header-burger-btn')) {
        document.body.classList.remove('mobile-menu-open');
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && document.body.classList.contains('mobile-menu-open')) {
        document.body.classList.remove('mobile-menu-open');
      }
    });
  }

  /* ============================================ */
  /* ADD "BACK TO TOP" BUTTON */
  /* ============================================ */
  
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Back to top');
  backToTop.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color, #0066cc);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
  `;
  
  document.body.appendChild(backToTop);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 500) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });
  
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  backToTop.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px) scale(1.1)';
    this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
  });
  
  backToTop.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  });

  /* ============================================ */
  /* BUSINESS HOURS STATUS */
  /* ============================================ */
  
  function updateBusinessStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour * 60 + minute;
    
    const isOpen = (day >= 1 && day <= 5) && (currentTime >= 540 && currentTime < 960);
    
    const statusElements = document.querySelectorAll('.business-hours, .contact-info');
    
    statusElements.forEach(el => {
      let statusBadge = el.querySelector('.status-badge');
      
      if (!statusBadge) {
        statusBadge = document.createElement('div');
        statusBadge.className = 'status-badge';
        statusBadge.style.cssText = `
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        `;
        el.appendChild(statusBadge);
      }
      
      if (isOpen) {
        statusBadge.innerHTML = '<span style="color: #22c55e;">● Open Now</span>';
        statusBadge.style.background = 'rgba(34, 197, 94, 0.1)';
        statusBadge.style.color = '#22c55e';
      } else {
        statusBadge.innerHTML = '<span style="color: #94a3b8;">● Closed</span>';
        statusBadge.style.background = 'rgba(148, 163, 184, 0.1)';
        statusBadge.style.color = '#94a3b8';
      }
    });
  }
  
  updateBusinessStatus();
  // Update every minute
  setInterval(updateBusinessStatus, 60000);

  /* ============================================ */
  /* ACCESSIBILITY ENHANCEMENTS */
  /* ============================================ */
  
  // Add skip to main content link
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-to-main';
  skipLink.textContent = 'Skip to main content';
  skipLink.setAttribute('tabindex', '0');
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Ensure main content has ID
  const mainContent = document.querySelector('main, .main-content, #page');
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
  }
  
  // Add aria-labels to icon-only buttons
  document.querySelectorAll('button:not([aria-label])').forEach(btn => {
    if (btn.textContent.trim() === '' || btn.querySelector('svg')) {
      const icon = btn.querySelector('svg');
      if (icon && !btn.getAttribute('aria-label')) {
        btn.setAttribute('aria-label', 'Menu button');
      }
    }
  });

  /* ============================================ */
  /* ANALYTICS TRACKING ENHANCEMENTS */
  /* ============================================ */
  
  // Track outbound links
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'outbound_click', {
            'event_category': 'Outbound Link',
            'event_label': this.href
          });
        }
      });
    }
  });
  
  // Track form submissions
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
      if (typeof gtag !== 'undefined') {
        const formName = this.getAttribute('data-form-id') || 'Contact Form';
        gtag('event', 'form_submission', {
          'event_category': 'Form',
          'event_label': formName
        });
      }
    });
  });
  
  // Track button clicks
  document.querySelectorAll('.sqs-block-button-element').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'button_click', {
          'event_category': 'CTA',
          'event_label': this.textContent.trim()
        });
      }
    });
  });

  /* ============================================ */
  /* PERFORMANCE MONITORING */
  /* ============================================ */
  
  // Report Core Web Vitals to Google Analytics (if available)
  if ('PerformanceObserver' in window && typeof gtag !== 'undefined') {
    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.renderTime || lastEntry.loadTime),
          event_category: 'Web Vitals'
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch(e) {}
    
    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(entry.processingStart - entry.startTime),
            event_category: 'Web Vitals'
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch(e) {}
  }

  /* ============================================ */
  /* CONSOLE MESSAGE (Optional - Remove in Production) */
  /* ============================================ */
  
  console.log('%c🎨 Modern Design System Loaded', 'color: #0066cc; font-size: 14px; font-weight: bold;');
  console.log('%cDelta Healing Solutions - Modern UI Enhancement', 'color: #666; font-size: 12px;');

});

/* ============================================ */
/* LOADING PERFORMANCE */
/* ============================================ */

// Preload critical resources
window.addEventListener('load', function() {
  // Prefetch next likely pages
  const links = document.querySelectorAll('a[href^="/"]');
  links.forEach(link => {
    link.addEventListener('mouseenter', function() {
      const prefetch = document.createElement('link');
      prefetch.rel = 'prefetch';
      prefetch.href = this.href;
      document.head.appendChild(prefetch);
    }, { once: true });
  });
});

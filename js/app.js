/**
 * Portfolio Main App Controller
 * Manages rendering, themes, animations, interactions, and forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Validate dependencies
  if (typeof PORTFOLIO_DATA === 'undefined') {
    console.error('Portfolio data file (data.js) is missing or not loaded correctly.');
    return;
  }

  // Initializing functions
  initThemes();
  renderDynamicContent();
  initNavbarScroll();
  initCustomCursor();
  initScrollAnimations();
  initProjectFilters();
  initProjectModal();
  initCardTilts();
  initContactForm();
  
  // Init particle backgrounds
  if (typeof HeroParticles !== 'undefined') {
    new HeroParticles('hero-particles');
  }
});

/* ==========================================================================
   Theme Management (Light locked)
   ========================================================================== */
function initThemes() {
  document.body.removeAttribute('data-theme');
  localStorage.removeItem('theme');
}

/* ==========================================================================
   Dynamic Content Rendering
   ========================================================================== */
function renderDynamicContent() {
  const data = PORTFOLIO_DATA;

  // 1. Hero text typing/cycling effect
  const heroSubTitle = document.getElementById('hero-subtitle');
  if (heroSubTitle && data.profile.titles.length > 0) {
    let index = 0;
    
    const cycleText = () => {
      heroSubTitle.style.opacity = '0';
      heroSubTitle.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        heroSubTitle.textContent = data.profile.titles[index];
        heroSubTitle.style.opacity = '1';
        heroSubTitle.style.transform = 'translateY(0)';
        index = (index + 1) % data.profile.titles.length;
      }, 400);
    };

    cycleText();
    setInterval(cycleText, 3000);
  }

  // 2. Render Hero details
  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = data.profile.name;
  
  const heroDesc = document.getElementById('hero-desc');
  if (heroDesc) heroDesc.textContent = data.profile.bio;

  // 3. Render About details
  const storyPara1 = document.getElementById('about-story-1');
  if (storyPara1) storyPara1.textContent = data.about.story;

  // 4. Render Stats
  const statsContainer = document.getElementById('stats-grid');
  if (statsContainer) {
    statsContainer.innerHTML = data.stats.map((stat, i) => `
      <div class="stat-card glass reveal reveal-delay-${i + 1}">
        <div class="stat-number" data-value="${stat.value}">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }

  // 4.5. Render Education Grid
  const educationContainer = document.getElementById('education-grid');
  if (educationContainer && data.education) {
    educationContainer.innerHTML = data.education.map((edu, i) => `
      <div class="education-card glass reveal reveal-delay-${i + 1}">
        <div class="education-header">
          <h3 class="education-degree">${edu.degree}</h3>
          <span class="education-year">${edu.year}</span>
        </div>
        <h4 class="education-institution">${edu.institution}</h4>
        ${edu.university ? `<h5 class="education-university" style="font-size:0.9rem; color:var(--text-tertiary); margin-bottom:0.75rem; font-weight: 500;">${edu.university}</h5>` : ''}
        <p class="education-score">${edu.score}</p>
      </div>
    `).join('');
  }

  // 4.6. Render Achievements List
  const achievementsContainer = document.getElementById('achievements-list');
  if (achievementsContainer && data.achievements) {
    achievementsContainer.innerHTML = data.achievements.map((ach, i) => `
      <li class="achievement-item reveal reveal-delay-${(i % 3) + 1}">
        <div class="achievement-item-icon">
          <svg viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div class="achievement-item-text">
          ${ach}
        </div>
      </li>
    `).join('');
  }

  // 4.7 Render Certifications Grid
  const certificationsContainer = document.getElementById('certifications-grid');
  if (certificationsContainer && data.certifications) {
    certificationsContainer.innerHTML = data.certifications.map((cert, i) => `
      <div class="certification-card glass reveal reveal-delay-${(i % 3) + 1}">
        <div class="certification-icon-wrapper">
          ${getCertIcon(cert.icon)}
        </div>
        <h3 class="certification-title">${cert.name}</h3>
      </div>
    `).join('');
  }

  // 5. Render Skills
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skillsContainer.innerHTML = data.skills.map((category, catIdx) => `
      <div class="skill-category-card glass reveal reveal-delay-${catIdx + 1}">
        <h3 class="skill-category-title">${category.category}</h3>
        <div class="skills-list">
          ${category.items.map(skill => `
            <div class="skill-item">
              <div class="skill-meta">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percent">${skill.level}%</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" data-percent="${skill.level}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 6. Render Projects
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = data.projects.map((project, i) => `
      <div class="project-card glass reveal reveal-delay-${i % 3 + 1}" data-id="${project.id}" data-categories='${JSON.stringify(project.categories)}'>
        <div class="project-card-inner">
          <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400'">
          </div>
          <div class="project-tags">
            ${project.tech.slice(0, 3).map(tech => `<span class="project-tag">${tech}</span>`).join('')}
          </div>
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-desc">${project.description}</p>
          <div class="project-card-link">
            <span>View Details</span>
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 7. Render Timeline (Experience)
  const timeline = document.getElementById('experience-timeline');
  if (timeline) {
    timeline.innerHTML = data.experience.map((exp, i) => `
      <div class="timeline-item reveal reveal-delay-${i % 2 + 1}">
        <div class="timeline-dot"></div>
        <div class="timeline-content glass">
          <div class="timeline-period">${exp.period}</div>
          <h3 class="timeline-role">${exp.role}</h3>
          <h4 class="timeline-company">${exp.company}</h4>
          <ul class="timeline-responsibilities" style="margin-top: 1rem; padding-left: 1.25rem; color: var(--text-secondary); font-size: 0.9375rem; display: flex; flex-direction: column; gap: 0.5rem; text-align: left;">
            ${exp.responsibilities.map(resp => `<li style="list-style-type: disc;">${resp}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // 8. Render Contact Info
  const emailText = document.getElementById('contact-email');
  if (emailText) emailText.textContent = data.profile.socials.find(s => s.name === "Email").url.replace("mailto:", "");
  
  const socialRow = document.getElementById('socials-row');
  if (socialRow) {
    socialRow.innerHTML = data.profile.socials.map(social => `
      <a href="${social.url}" target="_blank" class="social-circle-link" aria-label="${social.name}">
        ${getSocialIcon(social.icon)}
      </a>
    `).join('');
  }

  // 9. Render Download Resume links
  const heroDownloadBtn = document.getElementById('hero-resume-btn');
  if (heroDownloadBtn && data.profile.cvLink) {
    heroDownloadBtn.setAttribute('href', data.profile.cvLink);
  }
  const aboutDownloadBtn = document.getElementById('about-download-btn');
  if (aboutDownloadBtn && data.profile.cvLink) {
    aboutDownloadBtn.setAttribute('href', data.profile.cvLink);
  }
}

// Helper: Vector icons for certifications
function getCertIcon(iconName) {
  const icons = {
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 8v8M5 16v-4h14v4"/></svg>`,
    lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
  };
  return icons[iconName] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
}

// Helper: Vector icons for socials
function getSocialIcon(iconName) {
  const icons = {
    github: `<svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
    twitter: `<svg viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
    dribbble: `<svg viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.27c-.227-.488-2.607-5.312-7.85-6.735.224-.51.436-1.026.634-1.547 5.093 1.912 7.155 5.176 7.216 5.275.053-.332.08-.67.08-1.012 0-3.397-1.785-6.375-4.46-8.082-.03.045-1.12 1.685-4.417 3.528-1.258-2.28-2.657-4.52-4.004-6.425-.333-.06-.673-.09-1.022-.09-3.238 0-6.107 1.706-7.772 4.28.05.02.5.175 1.554.498 3.518 1.077 7.027 4.07 8.528 7.375C10.74 13.324 7.2 14.183 2.2 14.183c-.09 0-.17 0-.25-.005C1.986 12.186 5.378 12.015 12 12c.007.037.012.074.02.112C12.01 12.073 12 12.036 12 12c.03.456.052.92.062 1.39-3.95.895-7.55 3.32-8.525 5.51-.013.028-.024.058-.035.088C5.23 21.6 8.423 23 12 23c4.158 0 7.828-2.122 9.98-5.335-.015-.035-.745-1.63-3.69-3.245 1.87-.714 3.535-.296 3.738-.24-.04-.377-.14-.738-.288-1.08z"/></svg>`,
    email: `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  };
  return icons[iconName] || '';
}

// Helper: Vector icons for achievements
function getAchievementIcon(iconName) {
  const icons = {
    experience: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
    tech: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    mentor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    gov: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    scholar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`
  };
  return icons[iconName] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
}

/* ==========================================================================
   Navigation Bar Scroll Interactions
   ========================================================================== */
function initNavbarScroll() {
  const header = document.querySelector('header');
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');
  
  if (!header) return;

  // Change nav background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Update active state based on section scroll
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    links.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
}

/* ==========================================================================
   Custom Cursor Trailing Behavior
   ========================================================================== */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');
  
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  // Smooth lagging loop for the follower circle
  const tick = () => {
    // Easing formula
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(tick);
  };
  tick();

  // Highlight classes on hoverable elements
  const hoverElements = document.querySelectorAll('a, button, .project-card, .filter-btn, .theme-toggle-btn');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });
}

/* ==========================================================================
   Scroll-triggered Reveal Animations
   ========================================================================== */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // If the intersected card is a skills category, animate progress bars
        const skillFills = entry.target.querySelectorAll('.skill-bar-fill');
        if (skillFills.length > 0) {
          skillFills.forEach(fill => {
            const percent = fill.getAttribute('data-percent');
            fill.style.width = `${percent}%`;
          });
        }
        
        // Unobserve after animating once
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   Projects Category Filters
   ========================================================================== */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = JSON.parse(card.getAttribute('data-categories'));
        
        // Visual toggle with brief scale animation
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.85)';
          
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* ==========================================================================
   Project Details Modal Controls
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const backdrop = modal.querySelector('.modal-backdrop');
  const projectCards = document.querySelectorAll('.project-card');

  const openModal = (projectId) => {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    // Populate elements
    modal.querySelector('.modal-image').src = project.image;
    modal.querySelector('.modal-image').onerror = function() {
      this.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400';
    };
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-subtitle').textContent = project.subtitle;
    modal.querySelector('.modal-desc').textContent = project.fullDescription;
    
    // Populate Tags
    const tagsWrapper = modal.querySelector('.modal-tags');
    tagsWrapper.innerHTML = project.tech.map(t => `<span class="project-tag">${t}</span>`).join('');

    // Action links
    modal.querySelector('#modal-live-link').href = project.liveUrl;
    modal.querySelector('#modal-code-link').href = project.codeUrl;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scroll
  };

  // Click card to open
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      openModal(id);
    });
  });

  // Closing listeners
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);
  
  // Close on Escape key press
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   3D Tilt Animations for Project Cards
   ========================================================================== */
function initCardTilts() {
  // Check if user is on mobile before attaching tilt event
  if (window.innerWidth <= 768) return;

  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // Mouse x relative to card
      const y = e.clientY - rect.top;  // Mouse y relative to card

      // Calculate center coordinates
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles (max tilt 10 degrees)
      const tiltX = ((centerY - y) / centerY) * 10;
      const tiltY = ((x - centerX) / centerX) * 10;

      // Apply transformations
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      // Reset card visual transforms
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      // Remove transitions momentarily while moving
      card.style.transition = 'none';
    });
  });
}

/* ==========================================================================
   Contact Form Submissions & Validations
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('success-toast');

  if (!form) return;

  const showToast = () => {
    if (!toast) return;
    toast.classList.add('show');
    
    // Auto hide after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  };

  const validateInput = (input) => {
    const parent = input.parentElement;
    let isValid = true;
    
    // Reset state
    parent.classList.remove('error');

    if (input.value.trim() === '') {
      parent.classList.add('error');
      isValid = false;
    } else if (input.type === 'email') {
      // Regex check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value.trim())) {
        parent.classList.add('error');
        isValid = false;
      }
    }

    return isValid;
  };

  // Validate on blur
  const inputs = form.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateInput(input);
    });
    
    // Clear errors on typing
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        input.parentElement.classList.remove('error');
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    inputs.forEach(input => {
      if (!validateInput(input)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Animate submit button state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending Message...</span>';

      // Simulate network request duration
      setTimeout(() => {
        showToast();
        form.reset();
        
        // Restore button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Remove label floating offsets manually after reset
        inputs.forEach(input => {
          input.blur();
        });
      }, 1500);
    }
  });
}

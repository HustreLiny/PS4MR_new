/**
 * Optimized Page TOC Plugin
 * Features:
 * - Uses IntersectionObserver API for better performance
 * - Floating panel UI instead of fixed sidebar
 * - Modern interaction patterns
 * - Responsive design
 */

class PageTOC {
    constructor() {
        this.pagetocPanel = null;
        this.pagetocContent = null;
        this.pagetocToggle = null;
        this.pagetocClose = null;
        this.observer = null;
        this.headers = [];
        this.tocLinks = [];
        this.isVisible = false;
        this.activeLink = null;

        // Throttle intersection callback for better performance
        this.throttledUpdateActive = this.throttle(this.updateActiveLink.bind(this), 100);
        
        this.init();
    }

    init() {
        // Check if we have enough headers to show TOC
        this.headers = Array.from(document.querySelectorAll('.header'));
        
        if (this.headers.length <= 1) {
            // Hide the toggle button if there are too few headers
            const toggleBtn = document.getElementById('pagetoc-toggle');
            if (toggleBtn) {
                toggleBtn.style.display = 'none';
            }
            return;
        }

        this.setupElements();
        this.buildTOC();
        this.setupEventListeners();
        this.setupIntersectionObserver();
    }

    setupElements() {
        this.pagetocPanel = document.getElementById('pagetoc-panel');
        this.pagetocContent = document.getElementById('pagetoc');
        this.pagetocToggle = document.getElementById('pagetoc-toggle');
        this.pagetocClose = document.getElementById('pagetoc-close');
    }

    buildTOC() {
        if (!this.pagetocContent) return;

        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment();
        
        this.headers.forEach((header, index) => {
            const link = document.createElement('a');
            link.textContent = header.textContent.trim();
            link.href = header.getAttribute('href') || header.hash;
            link.classList.add(`pagetoc-${header.parentElement.tagName}`);
            link.dataset.headerIndex = index;
            
            // Add click handler
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateToHeader(header);
                this.hideTOC();
            });

            fragment.appendChild(link);
            this.tocLinks.push(link);
        });

        this.pagetocContent.appendChild(fragment);
    }

    setupEventListeners() {
        // Toggle button click
        if (this.pagetocToggle) {
            this.pagetocToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleTOC();
            });
        }

        // Close button click
        if (this.pagetocClose) {
            this.pagetocClose.addEventListener('click', (e) => {
                e.stopPropagation();
                this.hideTOC();
            });
        }

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (this.isVisible && this.pagetocPanel && !this.pagetocPanel.contains(e.target)) {
                this.hideTOC();
            }
        });

        // Prevent clicks inside panel from closing it
        if (this.pagetocPanel) {
            this.pagetocPanel.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isVisible) {
                this.hideTOC();
            }
        });

        // Handle URL changes
        window.addEventListener('hashchange', () => {
            this.updateActiveFromURL();
        });
    }

    setupIntersectionObserver() {
        if (!window.IntersectionObserver) {
            // Fallback for older browsers
            console.warn('IntersectionObserver not supported, using scroll fallback');
            this.setupScrollFallback();
            return;
        }

        const options = {
            root: null,
            rootMargin: '-10% 0px -70% 0px', // Trigger when header is in the top 30% of viewport
            threshold: 0
        };

        this.observer = new IntersectionObserver((entries) => {
            this.throttledUpdateActive(entries);
        }, options);

        // Observe all headers
        this.headers.forEach(header => {
            this.observer.observe(header);
        });
    }

    setupScrollFallback() {
        // Fallback using scroll event (throttled)
        const throttledScroll = this.throttle(() => {
            this.updateActiveFromScroll();
        }, 100);

        window.addEventListener('scroll', throttledScroll);
    }

    updateActiveLink(entries) {
        if (!entries || entries.length === 0) return;

        // Find the entry that is intersecting and closest to the top
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        
        if (intersectingEntries.length === 0) return;

        // Sort by intersection ratio and position, prefer the one highest on screen
        intersectingEntries.sort((a, b) => {
            const aTop = a.boundingClientRect.top;
            const bTop = b.boundingClientRect.top;
            
            // Prefer the one closer to the top of the viewport
            if (Math.abs(aTop) < Math.abs(bTop)) return -1;
            if (Math.abs(aTop) > Math.abs(bTop)) return 1;
            
            // If they're at similar positions, prefer higher intersection ratio
            return b.intersectionRatio - a.intersectionRatio;
        });

        const targetHeader = intersectingEntries[0].target;
        const headerIndex = this.headers.indexOf(targetHeader);
        
        if (headerIndex !== -1) {
            this.setActiveLink(headerIndex);
        }
    }

    updateActiveFromScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight;
        const triggerPoint = scrollTop + viewportHeight * 0.3;

        let activeIndex = -1;

        for (let i = this.headers.length - 1; i >= 0; i--) {
            const header = this.headers[i];
            const headerTop = header.offsetTop;
            
            if (headerTop <= triggerPoint) {
                activeIndex = i;
                break;
            }
        }

        if (activeIndex !== -1) {
            this.setActiveLink(activeIndex);
        }
    }

    updateActiveFromURL() {
        const hash = window.location.hash;
        if (!hash) return;

        const headerIndex = this.headers.findIndex(header => 
            header.getAttribute('href') === hash || header.hash === hash
        );

        if (headerIndex !== -1) {
            this.setActiveLink(headerIndex);
        }
    }

    setActiveLink(index) {
        if (!this.tocLinks[index]) return;

        // Remove active class from all links
        this.tocLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to current link
        const newActiveLink = this.tocLinks[index];
        newActiveLink.classList.add('active');
        
        // Update active link reference
        this.activeLink = newActiveLink;

        // Scroll the active link into view if TOC is visible
        if (this.isVisible) {
            this.scrollToActiveLink();
        }
    }

    scrollToActiveLink() {
        if (!this.activeLink || !this.pagetocContent) return;

        const containerRect = this.pagetocContent.getBoundingClientRect();
        const linkRect = this.activeLink.getBoundingClientRect();
        
        const isInView = linkRect.top >= containerRect.top && 
                        linkRect.bottom <= containerRect.bottom;

        if (!isInView) {
            this.activeLink.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    navigateToHeader(header) {
        if (!header) return;

        const targetId = header.getAttribute('href') || header.hash;
        if (targetId) {
            // Update URL without triggering page jump
            history.pushState(null, null, targetId);
        }

        // Smooth scroll to header
        header.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    toggleTOC() {
        if (this.isVisible) {
            this.hideTOC();
        } else {
            this.showTOC();
        }
    }

    showTOC() {
        if (!this.pagetocPanel || this.isVisible) return;

        this.pagetocPanel.classList.remove('hidden');
        this.pagetocPanel.classList.add('visible');
        this.isVisible = true;

        // Update ARIA attributes
        if (this.pagetocToggle) {
            this.pagetocToggle.setAttribute('aria-expanded', 'true');
        }

        // Scroll to active link if exists
        if (this.activeLink) {
            requestAnimationFrame(() => {
                this.scrollToActiveLink();
            });
        }

        // Update active link based on current scroll position
        this.updateActiveFromScroll();
    }

    hideTOC() {
        if (!this.pagetocPanel || !this.isVisible) return;

        this.pagetocPanel.classList.remove('visible');
        this.pagetocPanel.classList.add('hidden');
        this.isVisible = false;

        // Update ARIA attributes
        if (this.pagetocToggle) {
            this.pagetocToggle.setAttribute('aria-expanded', 'false');
        }
    }

    // Utility function for throttling
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Cleanup method
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        
        // Remove event listeners
        // Note: In a real implementation, you'd want to store references to bound functions
        // to properly remove event listeners
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PageTOC();
    });
} else {
    new PageTOC();
}

// Make it available globally if needed
window.PageTOC = PageTOC;

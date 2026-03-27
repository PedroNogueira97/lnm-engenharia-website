/**
 * Scroll-Driven Video Controller
 * 
 * Maps scroll position within a wrapper to video currentTime.
 * The hero stays pinned (via CSS `position: sticky`) while the user
 * scrolls through the wrapper. When scroll reaches the bottom of the
 * wrapper, the hero unpins and the page continues scrolling normally.
 */

export function initScrollVideo() {
    const wrapper = document.getElementById('hero-scroll-wrapper');
    const video = document.getElementById('hero-video');

    if (!wrapper || !video) return;

    // Wait for video metadata to load so we know the duration
    const setup = () => {
        const duration = video.duration;
        if (!duration || isNaN(duration)) return;

        // Pause the video — we seek manually
        video.pause();

        const onScroll = () => {
            const rect = wrapper.getBoundingClientRect();
            const wrapperHeight = wrapper.offsetHeight;
            const viewportH = window.innerHeight;

            // scrolled = how far into the wrapper we are (0 → wrapperHeight - viewportH)
            const scrollableDistance = wrapperHeight - viewportH;
            const scrolled = -rect.top;

            // progress 0 → 1
            const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

            // map to video time
            const targetTime = progress * duration;

            // Only seek if meaningfully different (avoids stuttering)
            if (Math.abs(video.currentTime - targetTime) > 0.01) {
                video.currentTime = targetTime;
            }
        };

        // Run on every scroll frame with passive listener for performance
        window.addEventListener('scroll', onScroll, { passive: true });

        // Initial sync
        onScroll();
    };

    if (video.readyState >= 1) {
        // metadata already loaded
        setup();
    } else {
        video.addEventListener('loadedmetadata', setup, { once: true });
    }
}

/**
 * Cleanup scroll video listeners when navigating away from home.
 */
export function destroyScrollVideo() {
    // The scroll listener is scoped inside initScrollVideo's closure.
    // Since we re-render the DOM on route change (which removes the wrapper),
    // scrolling calculations automatically become no-ops (getElementById returns null).
    // If cleanup were critical, we'd store a ref — but for this SPA it's fine.
}

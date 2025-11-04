const svgCache = new Map();

let currentPageRegistry = new Set();

let preloadInProgress = false;

export function getCachedSvg(url) {
    return svgCache.get(url);
}

export function setCachedSvg(url, content) {
    svgCache.set(url, content);
}

export function hasCachedSvg(url) {
    return svgCache.has(url);
}

export function registerSvgUrl(url) {
    currentPageRegistry.add(url);
}

export function clearRegistry() {
    currentPageRegistry.clear();
    preloadInProgress = false;
}

export function getRegisteredUrls() {
    return Array.from(currentPageRegistry);
}

export function preloadPageSvgs() {
    if (preloadInProgress) return;
    if (currentPageRegistry.size === 0) return;

    preloadInProgress = true;

    const urls = Array.from(currentPageRegistry);

    if (window.requestIdleCallback) {
        window.requestIdleCallback(
            () => {
                preloadSvgsNow(urls);
            },
            { timeout: 2000 }
        );
    } else {
        setTimeout(() => {
            preloadSvgsNow(urls);
        }, 1000);
    }
}

function preloadSvgsNow(urls) {
    urls.forEach(url => {
        if (svgCache.has(url)) return;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.text();
            })
            .then(content => {
                svgCache.set(url, content);
            })
            .catch(error => {
                console.warn(`SVG preload failed for ${url}:`, error.message);
            });
    });
}

export function getSvgCacheStats() {
    return {
        cachedCount: svgCache.size,
        registeredCount: currentPageRegistry.size,
        preloadInProgress,
        cachedUrls: Array.from(svgCache.keys()),
        registeredUrls: Array.from(currentPageRegistry),
    };
}


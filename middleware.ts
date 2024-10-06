import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match internationalized pathnames for '/', '/facilities', and '/contact'
    matcher: [
        '/',                        // Root path
        '/(de|en|fr)/',              // Internationalized root path
        '/facilities',               // Path without language prefix
        '/(de|en|fr)/facilities',     // Internationalized 'facilities' path
        '/contact',                  // Path without language prefix
        '/(de|en|fr)/contact',        // Internationalized 'contact' path
        '/:locale(facilities|contact)',  // Language detection for the specific paths
    ],
    localeDetection: false,
};

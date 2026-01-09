import summaryData from '../../data.json';

// Base path must match vite.config.js for GitHub Pages
const BASE_PATH = import.meta.env.BASE_URL;

export async function fetchSummaryData() {
  // Prepend base path to icon URLs for proper loading on GitHub Pages
  return summaryData.map(item => ({
    ...item,
    icon: `${BASE_PATH}${item.icon.startsWith('/') ? item.icon.slice(1) : item.icon}`
  }));
}
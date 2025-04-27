// lib/gtag.ts
export const GA_TRACKING_ID = process.env.GA_ID || '';

// Pageview tracking
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Event tracking (optional)
export const event = ({ action, category, label, value }: any) => {
  if (!GA_TRACKING_ID) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

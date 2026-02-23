type EventName =
  | 'cta_click'
  | 'form_submit'
  | 'form_success'
  | 'form_error'
  | 'gallery_open'
  | 'floorplan_view'
  | 'book_showing_click'
  | 'section_view';

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

export function track(event: EventName, properties?: EventProperties): void {
  if (typeof window === 'undefined') return;

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${event}`, properties);
  }

  // Future: integrate with your analytics provider here
  // e.g., posthog.capture(event, properties);
  // e.g., gtag('event', event, properties);
}

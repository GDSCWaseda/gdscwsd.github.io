export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

export const pageview = (url: string) => {
  if (typeof window !== 'undefined') {
    window.gtag('config', gaMeasurementId, {
      page_path: url
    }) //;
  }
}

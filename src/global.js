import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Light theme colors (default) */
    --theme-text: #18181b;
    --theme-image-highlight: #7c3aed;
    --theme-comp-img-highlight: #e4e4e7;
    --theme-jacket-color: #8b5cf6;
    --theme-dark: #18181b;
    --theme-surface: #fafafa;
    --theme-border: #e4e4e7;
  }

  [data-theme="dark"] {
    /* Dark theme colors */
    --theme-text: #e4e4e7;
    --theme-image-highlight: #8b5cf6;
    --theme-comp-img-highlight: #27272a;
    --theme-jacket-color: #4c1d95;
    --theme-dark: #000000;
    --theme-surface: #18181b;
    --theme-border: #27272a;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background-color 0.25s linear, color 0.25s linear;

    --font-agustina: "Agustina Regular";
    --font-montserrat: "Montserrat";
    --font-google-sans-bold: "Google Sans Bold";
    --font-google-sans-bold-italic: "Google Sans Bold Italic";
    --font-google-sans-medium: "Google Sans Medium";
    --font-google-sans-medium-italic: "Google Sans Medium Italic";
    --font-google-sans-regular: "Google Sans Regular";
    --font-google-sans-italic: "Google Sans Italic";

    --font-hero-title: 70px;
    --font-hero-subtitle: 30px;
    --font-hero-description: 30px;
    --font-page-heading: 67px;
    --font-page-subtitle: 30px;
    --font-page-long-description: 24px;
    --font-section-subtitle: 56px;
    --font-what-i-do-heading: 55px;
    --font-card-title: 23px;
    --font-card-subtitle: 18px;
    --font-card-metadata: 16px;
    --font-card-description: 16px;
    --font-experience-card-title: 24px;
    --font-experience-card-company: 20px;
    --font-experience-card-description: 18px;
    --font-body-icon-text: calc(16px + 0.42vw);
    --font-body-bullet-text: calc(16px + 0.42vw);
    --font-nav-links: 23px;
    --font-button: 18px;
    --font-tab-filter: 16px;
    --font-logo: 28px;
    --font-subTitle: 1.375rem;
    --font-testimonial-section-title: 40px;
    --font-testimonial-text: 17px;
    --font-testimonial-name: 18px;
    --font-testimonial-role: 14px;
    --font-skill-name: 16px;
  }

  @media (max-width: 1380px) {
    body {
      --font-page-heading: 60px;
      --font-page-subtitle: 25px;
      --font-what-i-do-heading: 60px;
      --font-section-subtitle: 40px;
    }
  }

  @media (max-width: 768px) {
    body {
      --font-hero-title: 30px;
      --font-hero-subtitle: 25px;
      --font-hero-description: 16px;
      --font-page-heading: 36px;
      --font-page-subtitle: 20px;
      --font-page-long-description: 20px;
      --font-section-subtitle: 30px;
      --font-what-i-do-heading: 36px;
      --font-card-title: 20px;
      --font-card-subtitle: 16px;
      --font-card-metadata: 14px;
      --font-card-description: 14px;
      --font-experience-card-title: 20px;
      --font-experience-card-company: 16px;
      --font-experience-card-description: 15px;
      --font-body-icon-text: 16px;
      --font-body-bullet-text: 16px;
      --font-nav-links: 18px;
      --font-button: 15px;
      --font-tab-filter: 14px;
      --font-logo: 24px;
      --font-subTitle: 1.125rem;
      --font-testimonial-section-title: 30px;
      --font-testimonial-text: 15px;
      --font-testimonial-name: 16px;
      --font-testimonial-role: 13px;
      --font-skill-name: 14px;
    }
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

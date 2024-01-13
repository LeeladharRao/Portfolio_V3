import { css } from 'styled-components';

const variables = css`
  :root {
    --gray-0: #f9f9f9;
    --gray-1: #eee;
    --gray-4: #bbb;
    --gray-5: #999;
    --gray-6: #666;
    --gray-7: #2c2c2c;
    --gray-8: #252525;
    --gray-10: #181818;
    --yellow: #fca62a;

    --background-color: var(--gray-10);

    --sidebar-background: var(--gray-5);
    --sidebar-line: var(--gray-7);
    --sidebar-icon: var(--gray-7);
    --sidebar-icon-hover: yellow;
    --sidebar-email: var(--gray-7);
    --sidebar-email-hover: yellow;

    --nav-background: var(--gray-10);
    --nav-background-drop: var(--gray-8);
    --nav-text: var(--gray-0);
    --nav-text-hover: yellow;
    --nav-button: var(--gray-10);
    --nav-button-text: yellow;

    --hero-text-h1: yellow;
    --hero-text-h2: var(--gray-0);
    --hero-text-h3: var(--gray-4);
    --hero-text: var(--gray-4);

    --about-background-colour: #FFF9A6;
    --about-text: var(--gray-10);

    --project-heading: var(--gray-0);
    --project-text: var(--gray-10);
    --project-archive-link: yellow;
    --project-link: var(--gray-10);
    --project-card-background-color: #FFF9A6;
    
    --contact-text-h3: yellow;
    --contact-text: var(--gray-0);

    --scrollbar-track-color: var(--gray-4);
    --scrollbar-thumb-color: var(--gray-6);

    --selection-color: #45b6fe;
    --selection-text-color: yellow;

    --404-text-h1: var(--gray-0);
    --404-text-h2: var(--gray-4);

    --archive-text-subtitle: var(--gray-4);
    --archive-text-table-head: var(--gray-0);
    --archive-text-year: yellow;
    --archive-text-title: var(--gray-4);

    --scrollbar-track: var(--gray-7);

    --footer-text: yellow;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;

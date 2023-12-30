import { css } from 'styled-components';

const variables = css`
  :root {
    --gray-0: #f9f9f9;
    --gray-05: #f6f6f6;
    --gray-1: #eee;
    --gray-2: #e6e6e6;
    --gray-3: #ddd;
    --gray-4: #bbb;
    --gray-5: #999;
    --gray-6: #666;
    --gray-65: #555;
    --gray-7: #2c2c2c;
    --gray-8: #252525;
    --gray-9: #1f1f1f;
    --gray-10: #181818;
    --green: #14ae73;
    --green-1: #95cd7f;
    --green-2: #73b18a;
    --green-3: #4d8994;
    --green-4: #30619d;
    --green-5: #30379d;
    --red: #f34646;
    --red-1: #fdd94a;
    --red-2: #e0a944;
    --red-3: #d37d36;
    --red-4: #cd583c;
    --red-5: #ab2e3f;
    --blue: #07a7e6;
    --blue-1: #70bdee;
    --blue-2: #618be1;
    --blue-3: #5b5ed5;
    --blue-4: #623ac6;
    --blue-5: #58119f;
    --rainbow-1: #ff67f7;
    --rainbow-2: #9b78fa;
    --rainbow-3: #59abf7;
    --rainbow-4: #5eddac;
    --rainbow-5: #f6cd5d;
    --orange: #ff7e22;
    --yellow: #fca62a;
    --pink: #f57ad0;
    --purple: #673ece;
    --indigo: #5a43f1;
    --indigo-dark: #4509cf;
    --indigo-light: #969bf6;
    --indigo-muted: #f1f2fd;

    --background-color: var(--gray-10);

    --sidebar-background: var(--gray-5);
    --sidebar-line: var(--gray-7);
    --sidebar-icon: var(--gray-7);
    --sidebar-icon-hover: yellow;
    --sidebar-email: var(--gray-7);
    --sidebar-email-hover: yellow;

    --nav-background: var(--gray-10);
    --nav-background-drop: var(--gray-8);
    --nav-logo: yellow;
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


    --year: var(--rainbow-4);
    --font-color-heading: white;
    --font-color-heading3: white;
    --font-color-base: var(--gray-2);
    --font-color-muted: var(--gray-5);
    --font-color-bright: white;
    --border-color: var(--gray-7);
    --border-color-hover: var(--gray-6);
    --button-background-color: var(--gray-8);
    --post-time-color: var(--rainbow-4);
    --card-time-color: var(--pink);
    --project-time-color: var(--star);
    --link: #9ca0fa;
    --link-hover-color: #222;
    --blockquote-background: rgba(120, 120, 240, 0.05);
    --marker: #e77cc7;
    --file-background: #161616;
    --inline-code-background-color: rgba(0, 0, 0, 0.2);
    --highlight-color: var(--rainbow-4);
    --navbar: var(--gray-9);
    --navbar-border: var(--gray-7);
    --navbar-color: var(--gray-4);
    --navbar-color-hover: white;
    --theme-button-background: var(--gray-8);
    --theme-button-background-hover: var(--gray-7);
    --theme-button-border: var(--gray-7);
    --theme-button-border-hover: var(--gray-6);
    --theme-button-color: var(--gray-0);
    --theme-button-color-hover: white;
    --category-link: var(--font-color-muted);
    --scrollbar-color: var(--gray-65);
    --scrollbar-track: var(--gray-7);
    --code-font-color: #b3b9c5;
    --code-background-color: #131313;
    --code-border-color: var(--gray-7);
    --terminal-background-color: #111;
    --terminal-color: white;
    --terminal-bar: -webkit-linear-gradient(top, #282828, #222);
    --terminal-border: var(--border-color);
    --terminal-accent: var(--gray-6);
    --string: var(--rainbow-4);
    --variable: var(--rainbow-2);
    --property: #b3b9c5;
    --number: #fca369;
    --operator: #637187;
    --punctuation: #c7cdd7;
    --comment: #777c85;
    --function: #28e3e6;
    --keyword: var(--rainbow-2);
    --attribute: #fed06d;
    --class: var(--rainbow-1);
    --tag: var(--rainbow-3);
    --error: #b0292c;
    --code-link-hover: var(--link-hover-color);
    --highlight-code-color: rgb(116, 207, 136, 0.1);

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

export const BLOG_TITLE = 'Layered';

export const LIGHT_COLORS = {
  '--color-text': 'hsl(210deg 20% 10%)',
  '--light-link': 'lab(62.022 58.758 -2.83)',

  '--color-primary-100': 'hsl(200deg 100% 92%)',
  '--color-primary-300': 'hsl(200deg 100% 75%)',
  '--color-primary-500': 'hsl(200deg 90% 60%)',
  '--color-primary-700': 'hsl(200deg 85% 40%)',
  '--color-primary-900': 'hsl(200deg 80% 25%)',
  '--color-primary-contrast': 'white',

  '--color-secondary-500': 'hsl(280deg 70% 60%)', // optional: softer purple instead of pink

  '--color-decorative-100': 'hsl(200deg 100% 96%)',
  '--color-decorative-200': 'hsl(200deg 100% 92%)',
  '--color-decorative-300': 'hsl(200deg 90% 85%)',
  '--color-decorative-500': 'hsl(200deg 80% 70%)',
  '--color-decorative-600': 'hsl(200deg 70% 60%)',
  '--color-decorative-700': 'hsl(200deg 60% 50%)',
  '--color-decorative-800': 'hsl(200deg 55% 40%)',
  '--color-decorative-900': 'hsl(200deg 50% 30%)',

  '--color-gray-0': 'white',
  '--color-gray-100': 'hsl(210deg 20% 95%)',
  '--color-gray-200': 'hsl(210deg 15% 90%)',
  '--color-gray-300': 'hsl(210deg 10% 75%)',
  '--color-gray-500': 'hsl(210deg 5% 50%)',
  '--color-gray-700': 'hsl(210deg 10% 25%)',
  '--color-gray-900': 'hsl(210deg 20% 10%)',
  '--color-gray-1000': 'black',
};

export const DARK_COLORS = {
  '--color-text': 'hsl(210deg 20% 95%)',
  '--light-link': 'lab(80.902 31.956 -7.989)',

  '--color-primary-100': 'hsl(200deg 80% 85%)',
  '--color-primary-300': 'hsl(200deg 80% 70%)',
  '--color-primary-500': 'hsl(200deg 90% 60%)',
  '--color-primary-700': 'hsl(200deg 85% 45%)',
  '--color-primary-900': 'hsl(200deg 80% 30%)',
  '--color-primary-contrast': 'black',

  '--color-secondary-500': 'hsl(280deg 70% 65%)',

  '--color-decorative-100': 'hsl(210deg 30% 8%)',
  '--color-decorative-200': 'hsl(210deg 30% 12%)',
  '--color-decorative-300': 'hsl(210deg 30% 18%)',
  '--color-decorative-500': 'hsl(200deg 40% 30%)',
  '--color-decorative-600': 'hsl(200deg 45% 40%)',
  '--color-decorative-700': 'hsl(200deg 50% 55%)',
  '--color-decorative-800': 'hsl(200deg 60% 70%)',
  '--color-decorative-900': 'hsl(200deg 70% 85%)',

  '--color-gray-0': 'black',
  '--color-gray-100': 'hsl(210deg 20% 10%)',
  '--color-gray-200': 'hsl(210deg 15% 15%)',
  '--color-gray-300': 'hsl(210deg 10% 30%)',
  '--color-gray-500': 'hsl(210deg 5% 55%)',
  '--color-gray-700': 'hsl(210deg 10% 75%)',
  '--color-gray-900': 'hsl(210deg 20% 90%)',
  '--color-gray-1000': 'white',
};

// Add in semantic / special colors
LIGHT_COLORS['--color-primary'] = LIGHT_COLORS['--color-primary-500'];
LIGHT_COLORS['--color-secondary'] = LIGHT_COLORS['--color-secondary-500'];
LIGHT_COLORS['--color-inline-code-bg'] = 'hsl(45deg 74% 85%)';
LIGHT_COLORS['--color-selection-text'] = 'black';
LIGHT_COLORS['--color-selection-background'] =
  LIGHT_COLORS['--color-decorative-700'];
LIGHT_COLORS['--color-backdrop'] = 'white';
LIGHT_COLORS['--color-page-background'] =
  LIGHT_COLORS['--color-decorative-100'];
LIGHT_COLORS['--color-page-border'] = 'transparent';
LIGHT_COLORS['--color-card-background'] = LIGHT_COLORS['--color-gray-0'];
LIGHT_COLORS['--color-card-border'] = 'transparent';

DARK_COLORS['--color-primary'] = DARK_COLORS['--color-primary-500'];
DARK_COLORS['--color-secondary'] = DARK_COLORS['--color-secondary-500'];
DARK_COLORS['--color-inline-code-bg'] = 'hsl(256deg 30% 22%)';
DARK_COLORS['--color-selection-text'] = 'white';
DARK_COLORS['--color-selection-background'] = 'hsl(256deg 100% 30%)';
DARK_COLORS['--color-backdrop'] = '#0d0f11';
DARK_COLORS['--color-page-background'] = 'transparent';
DARK_COLORS['--color-page-border'] = 'hsl(256deg 30% 50% / 0.2)';
DARK_COLORS['--color-card-background'] = DARK_COLORS['--color-backdrop'];
DARK_COLORS['--color-card-border'] = DARK_COLORS['--color-page-border'];

export const LIGHT_SHADOWS = {
  '--shadow-page': `
    0px 1px 2px hsl(210deg 20% 20% / 0.15),
    0px 3px 6px hsl(210deg 20% 20% / 0.15),
    0px 9px 18px hsl(210deg 20% 20% / 0.15),
    0px 18px 36px hsl(210deg 20% 20% / 0.15),
    0px 54px 108px hsl(210deg 20% 20% / 0.15)
  `,
  '--shadow-card': `
    0px 1px 2px hsl(210deg 15% 20% / 0.12),
    0px 2px 4px hsl(210deg 15% 20% / 0.12),
    0px 4px 8px hsl(210deg 15% 20% / 0.12),
    0px 8px 16px hsl(210deg 15% 20% / 0.12)
  `,
};
export const DARK_SHADOWS = {
  '--shadow-page': 'none',
  '--shadow-card': 'none',
};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
};

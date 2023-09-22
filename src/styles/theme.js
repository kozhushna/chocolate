const sizes = {
  onlymobile: '374px',
  mobile: '375px',
  tablet: '768px',
  desktop: '1200px',
};

export const theme = Object.freeze({
  colors: {
    mainBackground: '#FAFAFA',
    darkBackground: '#1E1823',
    accent: '#FD9222',
    white: '#ffffff',
    light: 'rgba(17, 17, 17, 0.10)', //border and circles
    primaryText: '#111',
    darkText: 'rgba(17, 17, 17, 0.70)',
    lightText: 'rgba(255, 255, 255, 0.70)',
    buttonHover: '#FCF1E0',
  },
});
export const devices = {
  onlymobile: `max-width: ${sizes.onlymobile}`,
  mobile: `min-width: ${sizes.mobile}`,
  tablet: `min-width: ${sizes.tablet}`,
  desktop: `min-width: ${sizes.desktop}`,
  retina: 'min-device-pixel-ratio: 2',
};

export const baseTransition = '250ms cubic-bezier(0.4, 0, 0.2, 1)';

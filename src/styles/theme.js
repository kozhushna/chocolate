const sizes = {
  onlymobile: '767',
  mobile: '375',
  tablet: '768',
  desktop: '1200',
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
    inputText: 'rgba(64, 64, 64, 0.30)',
    inputBorder: 'rgba(17, 17, 17, 0.05)',
    buttonHover: '#FCF1E0',
    backdropActive: '#00000080',
    lightBorder: 'rgba(255, 255, 255, 0.10)',
  },
  sizes: sizes,

  devices: {
    onlymobile: `max-width: ${sizes.onlymobile}px`,
    mobile: `min-width: ${sizes.mobile}px`,
    tablet: `min-width: ${sizes.tablet}px`,
    desktop: `min-width: ${sizes.desktop}px`,
    retina: 'min-device-pixel-ratio: 2',
  },

  baseTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  linerGradient: '180deg, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 0.4) 100%',
});

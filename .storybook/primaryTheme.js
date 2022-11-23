import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: '#1B4DB66',
  colorSecondary: '#ff8c4b',

  // UI
  appBg: '#121212',
  appContentBg: '#121212',
  appBorderColor: '#639599',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#639599',
  barSelectedColor: '#FFFFFF',
  barBg: '#1B4B66',

  // Form colors
  inputBg: '#1B4B66',
  inputBorder: '#FFFFFF',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 4,

  brandTitle: 'Shopware Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});
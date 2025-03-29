import config from '~/config.json';

export const navLinks = [
  {
    label: 'About',
    pathname: '/#about',
  },
  {
    label: 'NGO',
    pathname: '/#ngo',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Experience',
    pathname: '/#experience',
  },
  {
    label: 'Book a Call',
    pathname: '/book-call',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `https://linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'Twitter',
    url: `https://twitter.com/${config.twitter}`,
    icon: 'twitter',
  },
];

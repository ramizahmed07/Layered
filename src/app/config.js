import { BLOG_TITLE } from '@/constants';

export const siteConfig = {
  name: BLOG_TITLE,
  title: {
    default: BLOG_TITLE,
    template: `%s • ${BLOG_TITLE}`,
  },
  description: 'A layered approach to writing.',
};

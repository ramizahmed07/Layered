import RSS from 'rss';

import { getBlogPostList } from '@/helpers/file-helpers';
import { siteConfig } from '@/constants';

export async function GET() {
  const feed = new RSS({
    title: siteConfig.name,
    description: siteConfig.description,
  });

  const blogPosts = await getBlogPostList();

  blogPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.abstract,
      date: post.publishedOn,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/${post.slug}`,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

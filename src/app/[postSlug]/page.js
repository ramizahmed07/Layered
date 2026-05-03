import React from 'react';

import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { loadBlogPost } from '@/helpers/file-helpers';
import BlogHero from '@/components/BlogHero';
import COMPONENT_MAP from '@/helpers/mdx-components';
import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const { postSlug } = await params;

  const blogPostData = await loadBlogPost(postSlug);
  if (!blogPostData) return null;

  return {
    title: blogPostData.frontmatter.title,
  };
}

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const blogPostData = await loadBlogPost(postSlug);
  if (!blogPostData) notFound();

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={blogPostData.frontmatter.title}
        publishedOn={blogPostData.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={blogPostData.content} components={COMPONENT_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;

import React from 'react';
import { allPosts } from 'contentlayer/generated';
import PostListEntry from './components/post-list-entry';

export default function Home() {
  const postsSortedByDate = [...allPosts].sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );

  return (
    <section className='px-8'>
      <main className='m-auto h-full max-w-4xl '>
        {postsSortedByDate.map((post, key) => (
          <PostListEntry key={key} post={post} />
        ))}
      </main>
    </section>
  );
}

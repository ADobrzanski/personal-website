import { Post } from '@/.contentlayer/generated';
import Link from 'next/link';
import TagChip from './tag-chip';

export default function PostListEntry({ post }: { post: Post }) {
  return (
    <section>
      <span className='mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-2'>
        <time
          dateTime={post.date}
          className='whitespace-nowrap text-xs text-gray-600'
        >
          {new Date(post.date).toDateString()}
        </time>

        <span className='inline-flex gap-1'>
          {post.tags.map((tagName) => (
            <TagChip key={tagName} href={`/tag/${tagName}`}>
              {tagName}
            </TagChip>
          ))}
        </span>
      </span>

      <Link href={post.url}>
        <h1 className='mb-2 text-2xl font-bold decoration-solid decoration-2 underline-offset-2 hover:underline'>
          {post.title}
        </h1>
      </Link>

      <p className='text-md text-ellipsis text-gray-600'>
        {post.body.raw.slice(0, 200)}
      </p>
    </section>
  );
}

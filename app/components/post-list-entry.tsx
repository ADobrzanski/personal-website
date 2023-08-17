import { Post } from '@/.contentlayer/generated';
import Link from 'next/link';
import TagChip from './tag-chip';

export default function PostListEntry({ post }: { post: Post }) {
  return (
    <section className='flex flex-col gap-2'>
      <Link href='/'>
        <h1 className='text-2xl font-bold decoration-solid decoration-2 underline-offset-2 hover:underline'>
          {post.title}
        </h1>
      </Link>
      <span>
        <em className='text-md mr-4 font-light'>
          Published: {new Date(post.date).toLocaleDateString()}
        </em>
        <span className='inline-flex gap-1'>
          {post.tags.map((tagName) => (
            <TagChip key={tagName} href={`/tag/${tagName}`}>
              {tagName}
            </TagChip>
          ))}
        </span>
      </span>
      <p className='text-md text-ellipsis'>{post.body.raw.slice(0, 100)}...</p>
    </section>
  );
}

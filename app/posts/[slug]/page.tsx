import { allPosts } from 'contentlayer/generated';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <main className='px-8'>
      <article className='mx-auto max-w-4xl'>
        <div className='mb-8 text-center'>
          <time dateTime={post.date} className='mb-1 text-xs text-gray-600'>
            {new Date(post.date).toDateString()}
          </time>
          <h1 className='text-3xl font-bold'>{post.title}</h1>
        </div>
        <div
          className='prose xl:prose-xl'
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </article>
    </main>
  );
};

export default PostLayout;

import Link from 'next/link';
import React from 'react';
import TagChip from './components/tag-chip';

export default function Home() {
  return (
    <>
      <section className='px-8'>
        <main className='m-auto h-full max-w-4xl '>
          <section className='flex flex-col gap-2'>
            <Link href='/article'>
              <h1 className='text-2xl font-bold decoration-solid decoration-2 underline-offset-2 hover:underline'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Article Title: What's more a rather lengthy one in my opinion
              </h1>
            </Link>
            <span>
              <em className='text-md mr-4 font-light'>Published: 2023-08-15</em>
              <span className='inline-flex gap-1'>
                <TagChip href='/tag/list'>list</TagChip>
                <TagChip href='/tag/of'>of</TagChip>
                <TagChip href='/tag/tage'>tags</TagChip>
              </span>
            </span>
            <p className='text-md text-ellipsis'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </section>
        </main>
      </section>
    </>
  );
}

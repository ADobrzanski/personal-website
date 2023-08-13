export default function Home() {
  return (
    <>
      <section className='px-8'>
        <main className='m-auto h-full max-w-4xl '>
          <section>
            <h1 className='text-lg font-bold'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Article Title: What's more a rather lengthy one
            </h1>
            <em>Published: sometime</em> | #list #of #tags
            <p className='text-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </section>
        </main>
      </section>
    </>
  );
}

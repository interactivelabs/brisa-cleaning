import getHomepage from '@/sanity/data/getHomepage';

export default async function Home() {
  const page = await getHomepage();
  console.log(page[0]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{page[0].title}</h1>
    </main>
  );
}

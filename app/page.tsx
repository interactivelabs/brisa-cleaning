import Testimonials from '@/components/Testimonials';
import getHomepage from '@/sanity/data/getHomepage';

export default async function Home() {
  const pages = await getHomepage();
  const homepage = pages[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{homepage.title}</h1>
      <Testimonials testimonials={homepage.modules[0]} />
    </main>
  );
}

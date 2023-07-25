import Testimonials from '@/components/Testimonials';
import { api } from '@/sanity/data/api';
import {
  PageContentFragment,
  TestimonialsFragment,
} from '@/sanity/data/gql-sdk';

export default async function Home() {
  const pages = await api.GetPage({
    id: '43a4b0b5-7df9-420e-95b8-0c2aff0f2f94',
  });

  const homepage = pages.Page;
  if (!homepage) return <div>Error Page content can&apos;t be loaded</div>;

  const content = homepage.modules?.map(
    (module: PageContentFragment | null) => {
      if (!module || !('_type' in module)) return null;
      if (module.__typename === 'Testimonials')
        return (
          <Testimonials
            key={module._key}
            testimonials={module as TestimonialsFragment}
          />
        );
      if (module.__typename === 'Section')
        return (
          <div key={module._key}>
            <h2>{module.title}</h2>
          </div>
        );
    },
  );

  return (
    <main className="p-8">
      <h1>{homepage.title}</h1>
      {content}
    </main>
  );
}

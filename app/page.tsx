import { getClient } from '@lib/apollo/rscClient';
import { HomePageDocument, HomePageQuery } from './HomePage.graphql';

async function getData(): Promise<HomePageQuery> {
  const { data, error } = await getClient().query({ query: HomePageDocument });
  if (error) throw new Error('Failed to fetch data');
  return data;
}

export default async function Home() {
  const data = await getData();

  if (!(data.pageCollection?.items && data.pageCollection?.items[0]))
    return <main className="p-8">ERROR</main>;

  const homepageData = data.pageCollection.items[0];
  return (
    <main className="p-8">
      <h1>{homepageData.pageName}</h1>
    </main>
  );
}

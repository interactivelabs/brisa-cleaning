import { NextStudio } from 'next-sanity/studio';
import { metadata } from 'next-sanity/studio/metadata';
import Head from 'next/head';
import { StudioLayout, StudioProvider } from 'sanity';
import config from '../../sanity.config';

export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <NextStudio config={config}>
        <StudioProvider config={config}>
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </>
  );
}

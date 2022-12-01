import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src="https://code.jquery.com/jquery-3.6.1.min.js"
          strategy="lazyOnload"
          onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
        />
      </Head>
      <h1>First Post</h1>
      <Image src="/images/profile.jpeg" width={400} height={266} alt="profile" priority={true} />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

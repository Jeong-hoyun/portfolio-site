import Head from 'next/head'
import Layout from '../components/layout';
import Main from '../components/home/Main';

export default function Home() {
  return (
    <Layout>
        <Head>
            <title>정호윤 포트폴리오</title>
            <meta name="description" content="home 화면입니다" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <Main/>
            </div>
        </section>
    </Layout>
  );
}

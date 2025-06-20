import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dinning Reviews</title>
        <meta
          name="description"
          content="Discover and review the best dining experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container">
        <header className="mb-10 text-center">
          <h1 className="">Dinning Reviews</h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Discover, review, and share your favorite dining experiences. Find
            the best places to eat, curated by food lovers like you!
          </p>
        </header>
        <a
          href="#"
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Get Started
        </a>
      </main>
    </>
  );
}

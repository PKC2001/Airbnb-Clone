import Banner from "../components/Banner"
import Header from "../components/Header"
import Head from "next/head"

export default function Home({ exploreData }) {
  return <div>
    <Head>
      <title>Airbnb-Clone</title>
      <link rel="icon" href="" />
    </Head>
    <Header />
    <Banner />
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6">
        <h2 className="text-4xl font-semibold pb-5">
          Explore Nearby
        </h2>
        {/* Pull some data from server */}
        {exploreData.map((item) => {
          <h1>{item.location}</h1>
        })}
      </section>
    </main>
  </div>
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
  return {
    props:{
      exploreData
    }
  }
}
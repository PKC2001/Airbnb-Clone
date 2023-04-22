import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Head from "next/head";

export default function Home() {
  const exploreData = [
    {
      "id": "1",
      "img": "https://links.papareact.com/5j2",
      "location": "London",
      "distance": "45-minute drive"
    },
    {
      "id": "2",
      "img": "https://links.papareact.com/1to",
      "location": "Manchester",
      "distance": "4.5-hour drive"
    },
    {
      "id": "3",
      "img": "https://links.papareact.com/40m",
      "location": "Liverpool",
      "distance": "4.5-hour drive"
    },
    {
      "id": "4",
      "img": "https://links.papareact.com/msp",
      "location": "York",
      "distance": "4-hour drive"
    },
    {
      "id": "5",
      "img": "https://links.papareact.com/2k3",
      "location": "Cardiff",
      "distance": "45-minute drive"
    },
    {
      "id": "6",
      "img": "https://links.papareact.com/ynx",
      "location": "Birkenhead",
      "distance": "4.5-hour drive"
    },
    {
      "id": "7",
      "img": "https://links.papareact.com/kji",
      "location": "Newquay",
      "distance": "6-hour drive"
    },
    {
      "id": "8",
      "img": "https://links.papareact.com/41m",
      "location": "Hove",
      "distance": "2-hour drive"
    }
  ]

  return (
    <div>
      <Head>
        <title>Airbnb-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          {/* Pull some data from server */}
          {exploreData.map((item) => (
            <h1 key={item.id}>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   try {
//     const exploreData = await fetch("https://jsonkeeper.com/b/PGV7").then(
//       (res) => res.json()
//     );
//     return {
//       props: {
//         exploreData,
//       },
//     };
//   } catch (error) {
//     console.log("Error fetching explore data:", error);
//     return {
//       props: {
//         exploreData: [],
//       },
//     };
//   }
// }

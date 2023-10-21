"use client"
import React from 'react';
import { Nav } from './components/Nav';
import Search from './components/search';
import { features } from './db/features';
import { port } from './components/functions';
import { Footer } from './components/footer';
export default function Home() {


  return (
    <main>
      <Nav />
      <section className="items-center w-screen text-center p-10">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-[#503e52] text-4xl font-bold">
          Kotobee Author Customization Products
        </h1>
        <Search />

        <section className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 mt-5">
          {features.map((feature, index) => (
            <a
            key={index}
            className="bg-gray-100 rounded-lg p-4 text-start cursor-pointer hover:bg-gray-300"
            href={port + '/product/' + feature.link}
            
          >
            <h1 className="text-xl font-bold">{feature.title}</h1>
            <p className="font-semibold">Description:</p>
            <p className="text-gray-400">{feature.description || 'None'}</p>
            <p className="text-gray-400">Date Created: {feature.date_created || 'None'}</p>
            <p className="text-gray-400">Author: {feature.author || 'Anonymous'}</p>
          </a>
          
          ))}
        </section>
      </section>
      <Footer></Footer>
    </main>
  );
}

import React from "react";
import Search from "./search";
import { Nav } from "./Nav";
import { port } from "./functions";
import { Footer } from "./footer";
export function NotFound() {
  return (
    <main>
      <Nav></Nav>
      <section className="items-center w-screen text-center p-10">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-[#503e52] text-4xl font-bold">
          Kotobee Author Customization
          <br></br>
          404
        </h1>
        <p className="mt-5  text-4xl">Search:</p>
    
        <Search />
        <br></br>
        <br></br>
        <h2 className="text-2xl">Quick links:</h2>
        <br></br><br></br>
        <section>
          <a href={port} className=" text-blue-600 underline">Home</a>
        </section>

        
      </section>
      <Footer></Footer>
    </main>
  );
}

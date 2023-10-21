import React from "react";
import Search from "./search";
import { port } from "./functions";
export function Nav() {
  return (
    <nav className="bg-[#503e52] text-white flex items-center p-5">
      <a href={port}><img src={port + "/favicon.ico"} width="50px" alt="Logo" /></a>
      <h1 className="text-xl mx-auto">Kotobee Author Customization</h1>
      <Search></Search>
    </nav>
  );
}

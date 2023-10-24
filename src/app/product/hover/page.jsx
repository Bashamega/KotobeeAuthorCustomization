"use client"
import React, { useState } from 'react';
import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/footer";
import { ButtonHovering } from './components/buttonhoverings';
import { QuestionTutorial} from '@/app/components/questionTutorial';
import "./popup.css"
export default function Hovering() {
    const [choosetype, setchoosetype] = useState(true);
    const [buttonhoverings, setbuttonhovering] = useState(false);    

    return (
        <main>
            <Nav />
            <section className="flex items-center justify-center" style={{ height: 'calc(100vh - 100px)' }}>
                {choosetype ? (
                    <section className='p-10 rounded border-2 max-w-1/2'>
                        <h1>Custom Hoverings <QuestionTutorial tutorial="Please choose a type of hovering you want. To get started"></QuestionTutorial></h1>
                        <section id='choice'>
                            <button className=' bg-blue-600 p-2 text-white rounded m-5 hover:bg-blue-500' onClick={()=>{setchoosetype(false); setbuttonhovering(true)}}>Button Hoverings</button>
                            <button className=' bg-gray-600 p-2 text-white rounded m-5 hover:bg-gray-600' disabled>Links Hovering</button>
                            <button className=' bg-gray-600 p-2 text-white rounded m-5 hover:bg-gray-600' disabled>Custom hoverings</button>
                        </section>
                    </section>
                ) : <></>}
                {buttonhoverings ?(
                    <ButtonHovering></ButtonHovering>
                ):(<></>)}
                
            </section>
            
            <Footer />
        </main>
    );
}

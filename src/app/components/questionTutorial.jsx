'use client'
import {useState} from 'react';
import {AiFillQuestionCircle} from "react-icons/ai"
export function QuestionTutorial({tutorial}) {
    const [pop, setpop] = useState(false)
    console.log(tutorial)
    return (
        <div className='ml-5'>
            <AiFillQuestionCircle onClick={() => setpop(true)}></AiFillQuestionCircle>
            {pop?(
                <div className=' bg-gray-300 p-1 rounded w-36 relative' style={{position: 'absolute', zIndex: '9999'}}>
                    
                    <p onClick={()=>setpop(false)} className=' absolute top-0 right-2 cursor-pointer hover:bg-gray-200 rounded-full w-5 text-center'>x</p>
                    <br></br>
                    <p className=' text-sm'>{tutorial}</p>
                </div>
            ):(<></>)}
        </div>
    );
}

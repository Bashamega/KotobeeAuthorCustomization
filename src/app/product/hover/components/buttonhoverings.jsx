"use client"
import React, { useState } from 'react';
import "../popup.css"
import { QuestionTutorial} from '@/app/components/questionTutorial';
export function ButtonHovering() {
    const [selectedChoice, setSelectedChoice] = useState("");
    const [color, setColor] = useState("#503e52");
    const [csspopup, setcsspopup] = useState("");
    const [idInput, setid] = useState("");
    const [classNameInput, setclassName] = useState("");
    const [defaultnum, setDefaultnum] = useState(200);
    const [increasenum, setIncreasenum] = useState(5);
    const [customCSS, setcustomCSS] = useState("/*custom css*/")
    const closePopup = (popupId) => {
    setcsspopup("");
    };

    const handleColorChange = (event) => {
    setColor(event.target.value);
    };

    const handleChoiceChange = (event) => {
    setSelectedChoice(event.target.value);
    };

    const generatebuttoncss = () => {
        switch (selectedChoice) {
            case "Change Color":
                if (!idInput == "" && !classNameInput == "") {
                    const code = `
#${idInput}:hover, .${classNameInput}:hover {
    background-color: ${color};
}
                    `;
                    setcsspopup(code);
                } else if (!idInput == "") {
                    const code = `
#${idInput}:hover {
    background-color: ${color};
}
                    `;
                    setcsspopup(code);
                } else if (!classNameInput == "") {
                    const code = `
.${classNameInput}:hover {
    background-color: ${color};
}
                    `;
                    setcsspopup(code);
                }else{
                    const code = `
button:hover{
    background-color: ${color};
}
                    `
                    setcsspopup(code)
                }
                break;

            case "Enlarge":
                const width = defaultnum + increasenum;

                if (!idInput == "" && !classNameInput == "") {
                    const code = `
#${idInput}, .${classNameInput}{
    width:${defaultnum}px;
}
#${idInput}:hover, .${classNameInput}:hover{
    width:${width}px;
}
                    `;
                    setcsspopup(code);
                } else if (!idInput == "") {
                    const code = `
#${idInput}, .${classNameInput}{
    width:${defaultnum}px;
}
#${idInput}:hover{
    width:${width}px;
}
                    `;
                    setcsspopup(code);
                } else if (!classNameInput == "") {
                    const code = `
.${classNameInput}{
    width:${defaultnum}px;
}
.${classNameInput}:hover{
    width:${width}px;
}
                    `;
                    setcsspopup(code);
                }else{
                    const code = `
button{
    width:${defaultnum}px;
}
button:hover{
    width:${width}px;
}
                    `
                    setcsspopup(code)
                }
                break;
            case "Custom hoverings":
                if (!idInput == "" && !classNameInput == "") {
                    const code = `

#${idInput}:hover, .${classNameInput}:hover{
    ${customCSS}
}
                    `;
                    setcsspopup(code);
                } else if (!idInput == "") {
                    const code = `

#${idInput}:hover{
    ${customCSS}
}
                    `;
                    setcsspopup(code);
                } else if (!classNameInput == "") {
                    const code = `

.${classNameInput}:hover{
    ${customCSS}
}
                    `;
                    setcsspopup(code);
                }else{
                    const code = `

button:hover{
    ${customCSS}
}
                    `
                    setcsspopup(code)
                }
                break;
            default:
                break;
        }
    };

    return (
        
        <section className='p-10 rounded border-2 max-w-1/2'>
            <h1>Custom Button Hoverings</h1>
            <div>
                <div>
                    <h1>ID <QuestionTutorial tutorial={<p>Enter the button element id here.<a href='https://www.w3schools.com/htmL/html_id.asp' className=' underline' target='_blank'> Click here to learn about id attribute</a></p>}></QuestionTutorial></h1>
                    <input type='text' className=' border-2' value={idInput} onChange={(e)=>{setid(e.target.value)}}></input>  
                </div>
            <div>
                <h1>Class <QuestionTutorial tutorial={<p>Enter the button element class name here.<a href='https://www.w3schools.com/html/html_classes.asp' className=' underline' target='_blank'> Click here to learn about classes</a></p>}></QuestionTutorial></h1>
                <input type='text' className=' border-2' value={classNameInput} onChange={(e)=>{setclassName(e.target.value)}}></input>
            </div>
            <h1>Type: <QuestionTutorial tutorial={<p>Please choose an option from the choices bellow</p>}></QuestionTutorial></h1>
            <section id='choice'>
            <label className='mr-5'>
                <input
                    type="radio"
                    name="choice"
                    value="Change Color"
                    checked={selectedChoice === "Change Color"}
                    onChange={handleChoiceChange}
                />
                Change color
            </label>
            <label className='mr-5'>
                <input
                    type="radio"
                    name="choice"
                    value="Enlarge"
                    checked={selectedChoice === "Enlarge"}
                    onChange={handleChoiceChange}
                />
                Enlarge
            </label>
            <label className='mr-5'>
                <input
                    type="radio"
                    name="choice"
                    value="Custom hoverings"
                    checked={selectedChoice === "Custom hoverings"}
                    onChange={handleChoiceChange}
                />
                Custom hoverings
            </label>

                            
        </section>
        {selectedChoice =="Change Color" ?(
            <div>
                <h1>Color: <QuestionTutorial tutorial={"Choose a color that will take action when you hover on the button"}></QuestionTutorial></h1>
                <input type='color' value={color} onChange={handleColorChange}></input>
            </div>
        ):(
            <></>
        )}
        {selectedChoice =="Enlarge"? (
            <div>
                <h1>Default width: <QuestionTutorial tutorial={"Enter the default width for your button"}></QuestionTutorial></h1>
                <div className='flex'>
                    <input type='number' className=' border-2' value={defaultnum} onChange={(e)=>{setDefaultnum(e.target.value)}}></input>
                    <p>PX</p>
                </div>
                <h1>Increase number: <QuestionTutorial tutorial={"Enter how many numbers you want your button to increase when a cursor hover on it"}></QuestionTutorial></h1>
                <div className='flex'>
                    <input type='number' className=' border-2' value={increasenum} onChange={(e)=>{setIncreasenum(e.target.value)}}></input>
                    <p>PX</p>
                </div>

            </div>
        ):(<></>)}
        {selectedChoice =="Custom hoverings"?(
            <div>
                <p>CSS</p>
                <textarea className='w-full border-2' placeholder='css' value={customCSS} onChange={(e)=>{setcustomCSS(e.target.value)}}></textarea>
            </div>
        ):(
            <></>
        )}
        {selectedChoice ==""?(
            <></>
        ):(
            <button onClick={generatebuttoncss} className='  bg-blue-600 p-2 text-white rounded hover:bg-blue-500'>Generate css</button>
        )}
        {csspopup == ""?(
            <></>
        ):(
            <div className="popup" id='popup'>
                <h1>Code</h1>
                <textarea readOnly value={csspopup} id='code' className=' resize-none h-36'></textarea>
                <button className="copy-button" onClick={() => copyToClipboard('code', 'popup')}>Copy JS</button>
                <button onClick={() => closePopup('popup')}>Close</button>
            </div>
        )}
        </div>
        </section>

    );
}

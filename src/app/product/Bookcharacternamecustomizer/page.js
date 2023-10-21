"use client"
import React, { useState } from 'react';
import { Nav } from "@/app/components/Nav";
import { Footer } from "@/app/components/footer";
import './page.css';

export default function BookCharacterNameCustomizer() {
  const [namesCount, setNamesCount] = useState(1);
  const [nameList, setNameList] = useState([]);

  const addName = () => {
    setNamesCount(namesCount + 1);
    const newName = {
      id: `name-${namesCount}`,
      defaultName: `Default${namesCount}`,
    };
    setNameList([...nameList, newName]);
  };

  const deleteName = (id) => {
    const updatedNames = nameList.filter((name) => name.id !== id);
    setNameList(updatedNames);
  };

  const generateHtml = (id) => {
    if (id === 'default') {
      const generatedHTML = nameList.map((name) => (
        `<input type="text" name="${name.id}" style='border:black solid 1px'>`
      )).join('');
      document.getElementById('html-code').value = generatedHTML;
    } else {
      const selectedName = nameList.find((name) => name.id === id);
      const generatedHTML = `<input type="text" name="${selectedName.id}" style='border:black solid 1px'>`;
      document.getElementById('html-code').value = generatedHTML;
    }
    openPopup('html-popup');
  };

  const generateJs = () => {
    const inputList = nameList.map((name) => name.id);
    const defaultNames = nameList.map((name) => name.defaultName);

    const generatedJS = `
setTimeout(function() {
    const inputsList = ${JSON.stringify(inputList)};
    const defaultNames = ${JSON.stringify(defaultNames)};
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input, index) => {
        if (inputsList.includes(input.name)) {
            input.addEventListener('input', (e) => {
                localStorage.setItem(input.name, e.target.value);
            });
        }
    });
    const pConst = document.querySelectorAll('p');
    pConst.forEach((p, index) => {
        let text = p.innerText.toLowerCase();
        defaultNames.forEach((name, index) => {
            if (text.includes(name) && localStorage.getItem(inputsList[index])) {
                text = text.replace(name, localStorage.getItem(inputsList[index]));
            }
        });
        p.innerText = text;
    });
}, 1);    
`;

    document.getElementById('js-code').value = generatedJS;
    openPopup('js-popup');
  };

  const openPopup = (popupId) => {
    document.getElementById(popupId).style.display = 'block';
  };

  const closePopup = (popupId) => {
    document.getElementById(popupId).style.display = 'none';
  };

  const copyToClipboard = (elementId, pop) => {
    const textElement = document.getElementById(elementId);

    const range = document.createRange();
    range.selectNode(textElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand('copy');
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Unable to copy text to clipboard');
    }

    window.getSelection().removeAllRanges();
    closePopup(pop);
  };
  const updateDefaultName = (id, newValue) => {
    const updatedNames = nameList.map((name) => {
      if (name.id === id) {
        return { ...name, defaultName: newValue };
      }
      return name;
    });
    setNameList(updatedNames);
  };
  return (
    <main>
      <Nav />
      <nav className="bg-[#503e52] text-white flex items-center text-center p-5">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generateJs}>Generate JS</button>

        </nav>
      <section>
        <h1>Names:</h1>
        <div id="names">
          {nameList.map((name, index) => (
            <div key={name.id} className="name">
              <h2>Name {index + 1}</h2>
              <div>
                <label>Default name *required</label><br />
                <input
                  id={`default-${name.id}`}
                  type="text"
                  value={name.defaultName}
                  onChange={(e) => updateDefaultName(name.id, e.target.value)}
                /><br />
                <span>NOTE: This name will replace all the chars names in your book</span>
              </div>
              <button className="delete" onClick={() => deleteName(name.id)}>Delete</button>
              <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => generateHtml(name.id)}>Generate HTML</button>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addName}> + </button>

        <div className="popup" id="html-popup">
          <h2>HTML Input Code</h2>
          <textarea id="html-code" rows="6" cols="40" className="resize-none" />
          <button className="copy-button" onClick={() => copyToClipboard('html-code', 'html-popup')}>Copy HTML</button>
          <button onClick={() => closePopup('html-popup')}>Close</button>
        </div>

        <div className="popup" id="js-popup">
          <h2>Generated JavaScript</h2>
          <textarea id="js-code" rows="6" cols="40" className="resize-none" />
          <button className="copy-button" onClick={() => copyToClipboard('js-code', 'js-popup')}>Copy JS</button>
          <button onClick={() => closePopup('js-popup')}>Close</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

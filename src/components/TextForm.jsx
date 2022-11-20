import React, { useState } from "react";



export default function TextForm(props) {




  

  const handleCopy = () => {

    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);

    props.showAlert("Copied to clipboard", "success")


  }






  const handleExtraSpaces = () => {
    let words = Text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] != undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    })
    setText(joinedWords);
  }




  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = Text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };




  const handleUpclick = () => {
    // console.log("Upper Case Was Clicked");
    let newText = Text.toUpperCase();
    setText(newText);

    props.showAlert("Converted to upperCase", "success")


  }
  const handleLowclick = () => {
    // console.log("Lower Case Was Clicked");
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success")
  }

  const Clclick = () => {
    // console.log("Lower Case Was Clicked");
    let newText = "";
    setText(newText);

  }



  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg);

  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }




  const [Text, setText] = useState('Hello');

  return (
    <>
      <div className="Container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1> {props.heading} </h1>


        <div className="mb-3">

          <textarea className='form-control' value={Text} onChange={handleOnChange} style={{ backgroundColor: props.mode == 'dark' ? 'black' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}
            id="myBox" rows="8"></textarea>
        </div>

        <button className='btn btn-warning mx-2 my-2' onClick={handleUpclick}> Convert to Upper-                Case</button>

        <button className='btn btn-success mx-2 my-2' onClick={handleLowclick}> Convert to Lower-              Case</button>
        <button className='btn btn-dark mx-2 my-2' onClick={Clclick}> Clear Text </button>



        <button className='btn btn-info mx-2 my-2' onClick={speak}> Auto Read </button>
        <button className='btn btn-danger mx-2 my-2' onClick={handleReverse}> Reverse Text </button>
        <button className='btn btn-danger mx-2 my-2' onClick={handleExtraSpaces}> Remove extra spaces </button>
        <button className='btn btn-danger mx-2 my-2' onClick={handleCopy}> Copy to Clipboard </button>







      </div>



      <div className="Container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary</h1>

         <p> {Text.split(" ").length } words and {Text.length} characters </p>
        
      <p> {0.008 * Text.split("").length} Minutes Need to Read this</p>
      

        <h2>Preview</h2>
        <p> {Text.length > 0 ? Text : "Enter Your Text To Preview Here"} </p>



      </div>

    </>
  );


}



// <p>{Text.split(" ").length -1} words and <b>{Text.length}</b> character</p>
//           <p><b>{0.008 * Text.split("").length}</b> minutes to read</p>

import React, { useState } from 'react';

export default function TextForm({ showAlert }) {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h1>Enter text to Analyze</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={(event) => setText(event.target.value)}
          id="mybox"
          rows="10"
        ></textarea>
      </div>

      {/* Action Buttons */}
      <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={() => setText(text.toUpperCase())}>
        Convert to Uppercase
      </button>

      <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={() => setText(text.toLowerCase())}>
        Convert to Lowercase
      </button>

      <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={() => { 
        navigator.clipboard.writeText(text); 
        showAlert("Text Copied to Clipboard", "success");  
      }}>
        Copy to Clipboard
      </button>

      <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={() => setText(text.replace(/\d+/g, ''))}>
        Remove Numbers
      </button>

      <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={() => setText(text.replace(/\s+/g, ' ').trim())}>
        Remove Extra Spaces
      </button>

      <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={() => setText(text.replace(/[^a-zA-Z0-9 ]/g, ''))}>
        Remove Special Characters
      </button>

      <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={() => setText(text.split('').reverse().join(''))}>
        Reverse Text
      </button>

      <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={() => setText(text.split(' ').map(word => word.split('').reverse().join('')).join(' '))}>
        Reverse Each Word
      </button>

      <button disabled={text.length===0}className="btn btn-danger my-2 mx-2" onClick={() => { 
        setText(''); 
        showAlert("Text cleared!", "danger"); 
      }}>
        Clear Text
      </button>

      {/* Text Summary */}
      <h3>Summary</h3>
      <p>
        {text.trim().length > 0
          ? `${text.trim().split(/\s+/).length} words | ${text.length} characters`
          : "0 words | 0 characters"}
      </p>
      <p>
        {text.trim().length > 0
          ? `${(0.008 * text.trim().split(/\s+/).length).toFixed(2)} minutes to read`
          : "0 minutes to read"}
      </p>

      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something into the text box to preview it here"}</p>
    </div>
  );
}

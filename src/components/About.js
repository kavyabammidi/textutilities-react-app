import React from 'react';

export default function About() {
  return (
    <div className="container my-4">
      <h2 className="mb-3">About TextUtils</h2>
      <p>
        <strong>TextUtils</strong> is a powerful and user-friendly text manipulation tool designed to simplify text processing tasks. 
        Whether you're a writer, developer, or student, TextUtils provides an array of features to enhance, format, and clean your text effortlessly.
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li>🔠 Convert text to <strong>uppercase</strong> or <strong>lowercase</strong></li>
        <li>📋 Copy text to clipboard with a single click</li>
        <li>🔢 Remove <strong>numbers</strong> from text</li>
        <li>🚀 Eliminate <strong>extra spaces</strong> for better formatting</li>
        <li>🔄 Reverse text or reverse each word separately</li>
        <li>❌ Remove <strong>special characters</strong> for clean output</li>
      </ul>

      <h3>Why Use TextUtils?</h3>
      <p>
        TextUtils is lightweight, fast, and runs directly in your browser without requiring any installation. 
        It's an essential tool for anyone who frequently works with text, helping you save time and boost productivity!
      </p>

      <h3>Try It Now!</h3>
      <p>Enter text into the input box on the homepage and explore the various text transformation options.</p>
    </div>
  );
}

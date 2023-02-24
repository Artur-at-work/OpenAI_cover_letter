import Head from 'next/head';
import { useState } from 'react';

const Home = () => {
  const [jobDescription, setjobDescription] = useState('');

  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
  
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jobDescription }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }

  const onUserChangedText = (event) => {
  setjobDescription(event.target.value);
  };
  return (
    <div className="root">
      <Head>
        <title>OpenAI Cover Letter Generator</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Cover Letter for IT Engineers</h1>
          </div>
          <div className="header-subtitle">
            <h2>Paste the Job Description and Requirements</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea 
            placeholder="Job Description and Requirements" 
            className="prompt-box"
            value={jobDescription}
            onChange={onUserChangedText}
	        />
          
	<div className="prompt-buttons">
    <a
      className={isGenerating ? 'generate-button loading' : 'generate-button'}
      onClick={callGenerateEndpoint}
    >
      <div className="generate">
      {isGenerating ? <span className="loader"></span> : <p>WriteUp</p>}
      </div>
    </a>
  </div>

  {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Output</h3>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
</div>
        </div>
      </div>

  );
};

export default Home;

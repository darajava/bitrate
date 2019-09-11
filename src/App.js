import React, {useRef, useState} from 'react';
import './App.css';

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function App() {
  const input32 = useRef();
  const input96 = useRef();
  const input128 = useRef();
  const input192 = useRef();
  const input256 = useRef();
  const input320 = useRef();
  const inputSong = useRef();

  const [correctString, setCorrectString] = useState('') 

  const refArray = [
    input32,
    input96,
    input128,
    input192,
    input256,
    input320,
    inputSong,
  ];

  const check = () => {
      let correct = 0;
    refArray.map((ref) => {
      if (ref.current.getAttribute('data-correct') == ref.current.value) {
        ref.current.className = 'correct';
        correct++;
      }
      else
        ref.current.className = 'wrong';
    });

    setCorrectString('Congrats! you got ' + correct + ' out of ' + 7);
  }

  const songs = [
    <div className="answer">
      <input type="tel" data-correct={1} ref={input32} /> <audio controls src="/32.mp3"/>
    </div>,
    <div className="answer">
      <input type="tel" data-correct={2} ref={input96} /> <audio controls src="/96.mp3"/>
    </div>,
    <div className="answer">
      <input type="tel" data-correct={3} ref={input128} /> <audio controls src="/128.mp3"/>
    </div>,
    <div className="answer">
      <input type="tel" data-correct={4} ref={input192} /> <audio controls src="/192.mp3"/>
    </div>,
    <div className="answer">
      <input type="tel" data-correct={5} ref={input256} /> <audio controls src="/256.mp3"/>
    </div>,
    <div className="answer">
      <input type="tel" data-correct={6} ref={input320} /> <audio controls src="/320.mp3"/>
    </div>,
    <div className="answer">
      <input type="tel" data-correct={7} ref={inputSong} /> <audio controls src="/song.flac"/>
    </div>,
   ]


  return (
    <div className="app">
      <div>
      <div>OPTIONS:</div>
      <div className="option">
        <span>1.</span> 32 kbit/s
      </div>
      <div className="option">
        <span>2.</span> 96 kbit/s
      </div>
      <div className="option">
        <span>3.</span> 128 kbit/s
      </div>
      <div className="option">
        <span>4.</span> 192 kbit/s
      </div>
      <div className="option">
        <span>5.</span> 256 kbit/s
      </div>
      <div className="option">
        <span>6.</span> 320 kbit/s
      </div>
      <div className="option">
        <span>7.</span> Lossless
      </div>
      </div>

      <div>
        {shuffle(songs)}
      </div>

      <button onClick={check}>Check</button>

      {correctString && (
        <div>
        <div>
          {correctString}
        </div>
        <div>
          <button onClick={() => document.location = document.location}>Again?</button>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;

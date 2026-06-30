import React, { useState } from 'react';

export const SwipeGame = ({ game, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  
  const handleSwipe = (isSafe) => {
    const item = game.data.items[currentIndex];
    const correct = (isSafe && !item.isScam) || (!isSafe && item.isScam);
    setFeedback({ correct, explanation: item.explanation });
  };
  
  const nextItem = () => {
    setFeedback(null);
    if (currentIndex < game.data.items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(true);
    }
  };

  if (feedback) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h3 style={{ color: feedback.correct ? 'green' : 'red' }}>
          {feedback.correct ? 'Correct!' : 'Oops!'}
        </h3>
        <p>{feedback.explanation}</p>
        <button onClick={nextItem} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Next</button>
      </div>
    );
  }

  const item = game.data.items[currentIndex];
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <div style={{ margin: '2rem 0', padding: '2rem', border: '2px dashed #ccc', borderRadius: '8px' }}>
        <p style={{ fontSize: '1.2rem', wordBreak: 'break-all' }}>{item.content}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button onClick={() => handleSwipe(false)} style={{ background: '#ff4444', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>It's a Scam!</button>
        <button onClick={() => handleSwipe(true)} style={{ background: '#00C851', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Looks Safe</button>
      </div>
      <p style={{ marginTop: '1rem' }}>{currentIndex + 1} / {game.data.items.length}</p>
    </div>
  );
};

export const SpotTheFlagGame = ({ game, onComplete }) => {
  const [foundFlags, setFoundFlags] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleFlagClick = (flagId) => {
    if (!foundFlags.includes(flagId)) {
      setFoundFlags([...foundFlags, flagId]);
      setFeedback('You found a red flag!');
      if (foundFlags.length + 1 === game.data.flags.length) {
        setTimeout(() => onComplete(true), 1500);
      }
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h3 style={{ textAlign: 'center' }}>{game.title}</h3>
      <p style={{ textAlign: 'center' }}>{game.description}</p>
      <div style={{ margin: '2rem 0', padding: '1rem', background: '#fff', color: '#000', borderRadius: '8px', border: '1px solid #ccc' }}>
        <div dangerouslySetInnerHTML={{ __html: game.data.content }} />
      </div>
      <div>
        <h4>Flags to find: {foundFlags.length} / {game.data.flags.length}</h4>
        <ul>
          {game.data.flags.map(flag => (
            <li key={flag.id} style={{ cursor: 'pointer', color: foundFlags.includes(flag.id) ? 'green' : 'inherit', textDecoration: foundFlags.includes(flag.id) ? 'line-through' : 'none' }} onClick={() => handleFlagClick(flag.id)}>
              {foundFlags.includes(flag.id) ? `${flag.text} - ${flag.hint}` : '???'}
            </li>
          ))}
        </ul>
      </div>
      {feedback && <p style={{ color: 'green', fontWeight: 'bold' }}>{feedback}</p>}
    </div>
  );
};

export const PasswordGame = ({ game, onComplete }) => {
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (game.data.target === 'CREATE_SECURE') {
      if (guess.length >= 12 && /\d/.test(guess) && /[!@#$%^&*]/.test(guess)) {
        setFeedback('Secure password created!');
        setTimeout(() => onComplete(true), 1500);
      } else {
        setFeedback(game.data.hint);
      }
    } else {
      if (guess.toLowerCase() === game.data.target.toLowerCase()) {
        setFeedback('You cracked it!');
        setTimeout(() => onComplete(true), 1500);
      } else {
        const randomMsg = game.data.failMessages[Math.floor(Math.random() * game.data.failMessages.length)];
        setFeedback(randomMsg || 'Wrong guess.');
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <p><em>Hint: {game.data.hint}</em></p>
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <input 
          type="text" 
          value={guess} 
          onChange={(e) => setGuess(e.target.value)} 
          style={{ padding: '0.5rem', fontSize: '1.2rem', width: '80%', maxWidth: '300px' }}
          placeholder="Enter password..."
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', fontSize: '1.2rem', marginLeft: '0.5rem' }}>Submit</button>
      </form>
      {feedback && <p style={{ marginTop: '1rem', fontWeight: 'bold', color: feedback.includes('cracked') || feedback.includes('Secure') ? 'green' : 'red' }}>{feedback}</p>}
    </div>
  );
};

export const QuizGame = ({ game, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleSelect = (option) => {
    setSelectedOption(option);
    if (option.isCorrect) {
      setTimeout(() => onComplete(true), 2500);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h3>{game.title}</h3>
      <p style={{ fontSize: '1.2rem', margin: '2rem 0' }}>{game.data.question}</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        {game.data.options.map((opt, idx) => (
          <button 
            key={idx} 
            onClick={() => handleSelect(opt)}
            disabled={selectedOption !== null}
            style={{ 
              padding: '1rem', 
              width: '100%', 
              maxWidth: '400px', 
              background: selectedOption === opt ? (opt.isCorrect ? 'green' : 'red') : '#333',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: selectedOption === null ? 'pointer' : 'default'
            }}
          >
            {opt.text}
          </button>
        ))}
      </div>
      
      {selectedOption && (
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ color: selectedOption.isCorrect ? 'green' : 'red' }}>
            {selectedOption.isCorrect ? 'Correct!' : 'Incorrect!'}
          </h4>
          <p>{selectedOption.explanation}</p>
          {!selectedOption.isCorrect && (
            <button onClick={() => setSelectedOption(null)} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>Try Again</button>
          )}
        </div>
      )}
    </div>
  );
};

import './app.css';

function App() {
  const name = 'elie';

  return (
      <>
        <h1>hello world :)</h1>
        {name && <h1>hello {name}</h1> }
        {['⭐️','🧡'].map(item => (
            <h1>{item}</h1>
        ))}
      </>
  );
}

export default App;

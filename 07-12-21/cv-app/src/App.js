import './App.css';

function App() {
  return (

    <div className="App">

      <header className="App-header">

        <div className="App-logo">
          <h1>MG</h1>
        </div>

        <h2> Margherita Grasso </h2>

      </header>

      <div className="App-body">

        <div className="App-description">

          <h3>Descrizione</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        </div>

        <div className="App-text">

          <div className="App-exp">
          <h3>Esperienze</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="App-lang">
          <h3>Lingue</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div className="App-hobby">
          <h3>Hobby</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

        </div>

        <div className="App-form">

            <h3>Contattami</h3>

            <p>Oggetto</p>
            <div className="App-obj"></div>

            <p>Messaggio</p>
            <div className="App-mex"></div>

        </div>


      </div>


      <footer className="App-footer">
        <p>email@gmail.com</p>
      </footer>

    </div>


  );
}

export default App;

import React, { useState } from "react";

import Search from "./components/Search";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=5d12bda9";

  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
    console.log(state.s);
  };

  return (
    <div className="App">
      <header>
        <h1>Movie Finder Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} />
      </main>
    </div>
  );
}

export default App;

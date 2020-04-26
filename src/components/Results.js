import React from "react";

function Results({ reults }) {
  return (
    <section className="results">
      {results.map((result) => (
        <Result result={result} />
      ))}
    </section>
  );
}

export default Results;

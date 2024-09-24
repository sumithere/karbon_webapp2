import React, { useEffect, useState } from "react";

const Result = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const storedResult = localStorage.getItem("result");
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    }
  }, []);

  return (
    <div>
      <h2>Results</h2>
      {result ? (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      ) : (
        <p>No results available.</p>
      )}
    </div>
  );
};

export default Result;

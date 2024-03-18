import React, { useState } from "react";
function EncodingParametersInURLs() {
  const [a, setA] = useState<string | undefined>("34");
  const [b, setB] = useState<string | undefined>("23");
  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" onChange={(e) => setB(e.target.value)} value={b} />
      <h3>Path Parameters</h3>
      <a href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;

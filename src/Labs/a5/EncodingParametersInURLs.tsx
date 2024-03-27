import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
function EncodingParametersInURLs() {
  const [a, setA] = useState<string | undefined>("34");
  const [b, setB] = useState<string | undefined>("23");
  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get(`${API_BASE}/a5/welcome`);
    setWelcome(response.data);
  };
  const [result, setResult] = useState(0);
  const fetchSum = async (a: number, b: number) => {
    const response = await axios.get(`${API_BASE}/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a: number, b: number) => {
    const response = await axios.get(`${API_BASE}/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };

  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h3>Encoding Parameters In URLs</h3>
      <h4>Calculator</h4>
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" onChange={(e) => setB(e.target.value)} value={b} />
      <input value={result} type="number" readOnly />
      <h3>Fetch Result</h3>
      <button
        className="btn btn-primary"
        onClick={() => fetchSum(Number(a), Number(b))}
      >
        Fetch Sum of {a} + {b}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => fetchSubtraction(Number(a), Number(b))}
      >
        Fetch Substraction of {a} - {b}
      </button>
      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>
      <h3>Path Parameters</h3>
      <a className="btn btn-primary" href={`${API_BASE}/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger" href={`${API_BASE}/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>
      <h3>Query Parameters</h3>
      <a
        className="btn btn-primary"
        href={`${API_BASE}/a5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        className="btn btn-danger"
        href={`${API_BASE}/a5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        className="btn btn-success"
        href={`${API_BASE}/a5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        className="btn btn-dark"
        href={`${API_BASE}/a5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}
export default EncodingParametersInURLs;

import React, { useEffect, useState } from "react";
import "./Display.css"

export default function Display(props) {
  const { cityInput, isValidInput } = props;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (isValidInput) {
      const fetchZipCodes = async () => {
        let response = await fetch(`http://ctp-zip-api.herokuapp.com/city/${cityInput.toUpperCase()}`);
        
        /* if cannot find API with given input, send alert error */
        if (response.status === 404) {
          /* try to figure out why cannot change state (isValidInput) here */
          alert("Error: Cannot find city with given name");
        } else {
          response = await response.json(); 
          setResults(response);      
        } 
      }
      fetchZipCodes();
    }
  }, [cityInput])
  
  return (
      <div className="results-list-container">
        {results.map((result) => (
          <ul>
            <li>{result}</li>
          </ul>
        ))}
      </div>
  )
}
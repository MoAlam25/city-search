import Input from "./Input";
import React, { useEffect, useState } from "react";

export default function Display(props) {
  const { cityInput, setIsValidInput, setWasSubmitted } = props;
  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchZipCodes = async () => {
      let response = await fetch(`http://ctp-zip-api.herokuapp.com/city/${cityInput.toUpperCase()}`)
      response = await response.json()
      setResults(response)
    }
    fetchZipCodes()
  }, [cityInput])
  return (
    <div>{results.map((result) => (
      <ul>
        <li>{result}</li>
      </ul>
    ))} </div>
  )


}
import './App.css';
import Input from './Input'
import Display from './Display'
import React, {useState, useEffect} from "react"

function App() {
    const [cityInput, setCityInput] = useState("");
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [isValidInput, setIsValidInput] = useState(false);

    return (
        <div>
            <header>City Search</header>

            <Input 
                cityInput = {cityInput}
                setCityInput = {setCityInput}
                setWasSubmitted = {setWasSubmitted}
                setIsValidInput = {setIsValidInput}
            />
            <div>
                {isValidInput && wasSubmitted &&(
                    <Display 
                        cityInput = {cityInput}
                        isValidInput = {isValidInput}
                        setIsValidInput = {setIsValidInput}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
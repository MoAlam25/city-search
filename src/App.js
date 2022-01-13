import './App.css';
import Input from './Input'
import Display from './Display'
import React, {useState} from "react"

function App() {
    const [cityInput, setCityInput] = useState("");
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [isValidInput, setIsValidInput] = useState(false);

    return (
        <div>
            <Input 
                cityInput = {cityInput}
                setCityInput = {setCityInput}
                setWasSubmitted = {setWasSubmitted}
                setIsValidInput = {setIsValidInput}
            />
            <div>
                {isValidInput && (
                    <Display 
                        cityInput = {cityInput}
                        wasSubmitted = {wasSubmitted}
                    />
                )}
            </div>
        </div>
    );
}

export default App;

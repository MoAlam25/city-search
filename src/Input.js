import "./Input.css";

export default function Input(props) {
    const  { cityInput, setCityInput, setWasSubmitted, setIsValidInput } = props;

    const handleCityInputChange = (e) => {
        setCityInput(e.target.value);
        setWasSubmitted(false);
        setIsValidInput(false);
    };

    const handleCityInputSubmit = (e) => {
        e.preventDefault();
        setCityInput(cityInput);
        setWasSubmitted(true);
        if (cityInput.trim() != '') {
            setIsValidInput(true);
        }
    };

    return (
        <div className="input-form">
            <h3> City:</h3>
            <form onSubmit={(e) => handleCityInputSubmit(e)}>
                <input
                    type="text"
                    value={cityInput}
                    onChange={handleCityInputChange}
                    placeholder="Enter a city"
                ></input>
            </form>
        </div>
    );
}

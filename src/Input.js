import "./Input.css";

export default function Input(props) {
    const  { cityInput, setCityInput, setWasSubmitted, setIsValidInput } = props;

    const handleCityInputChange = (e) => {
        setCityInput(e.target.value);
        setWasSubmitted(false);
        setIsValidInput(false);
    };

    const handleCityInputSubmit = (e) => {

        /* if nothing in search box, send alert error message */
        if (cityInput.trim() == '') {
            alert("Please enter a city");
        } else {
            setIsValidInput(true);
            e.preventDefault();
            setCityInput(cityInput);
        }

        /* if input in search box is not an alphabetical letter, send error alert */
        if (!/^[a-zA-Z]*$/g.test(cityInput)) {
            alert("Please enter a valid state name with letters only");
            setIsValidInput(false);
        }
        setWasSubmitted(true);
    };

    return (
        <div className="input-form">
            <h3 className="input-header">City:&nbsp;</h3>
            <form onSubmit={(e) => handleCityInputSubmit(e)}>
                <input
                    type="text"
                    value={cityInput}
                    onChange={handleCityInputChange}
                    placeholder="Enter a city"
                    className="search-box"
                ></input>
            </form>
        </div>
    );
}

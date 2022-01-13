import Input from "./Input";
import React, {useState} from "react";

export default function Display(props) {
    const { cityInput, wasSubmitted } = props;

    return (
        <div>
            {wasSubmitted && (
                <div>{cityInput}</div>
            )}
        </div>
    );
}
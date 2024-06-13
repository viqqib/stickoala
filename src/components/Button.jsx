import React from "react";
const Button = (props) => {
    return(
        <button className="px-5 py-2 rounded-md bg-greenst text-creamst hover:bg-redKoala">{props.text}</button>
    )
}

export default Button;
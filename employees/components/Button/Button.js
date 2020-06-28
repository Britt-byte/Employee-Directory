import React from 'react';
import "./Button.css"

functionButton({children}) {

    return (
        <button className="Button">
            {children}
        </button>
    )
}

export default Button;
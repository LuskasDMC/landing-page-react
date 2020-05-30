import React from "react"
import clsx from 'clsx'

export default (props) => {
    const buttonStyle 
        = clsx({
            ["button-purple-default"]: true,
            ["button-purple-small-width"]: props.size == "small",
            ["button-purple-medium-width"]: props.size == "medium",
            ["button-purple-large-width"]: props.size == "large",
        })

    return(
        <button className={buttonStyle}>{props.text}</button>
    )
}

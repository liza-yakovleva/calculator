import React from 'react'
import './button.css'

const Button = (props) => {
    return(
        <div className="button"
            onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

const Operator = (props) =>{
    return(
        <div className="operator"
            onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

export {Button, Operator}
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const Buttons = ({ text, url })  => {

const Button = styled.button`
    display: inline-block;
    height: 38px;
    padding: 0 30px;
    margin: 10px 0;
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 4px;
    cursor: pointer; 
    box-sizing: border-box;
    &:hover {
        background-color: var(--primary-button-hover-bg);border-color: var(--primary-button-hover-bdr);color: var(--primary-button-hover);
    }
`;

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  url: PropTypes.string

};

return(
    <div>
        {url ? <a href={url}><Button>{text}</Button></a> : <Button>{text}</Button>}
    </div>
    )
}

export default Buttons;

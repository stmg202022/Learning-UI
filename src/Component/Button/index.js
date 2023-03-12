import React from "react";
//import { Button as MuiButton } from "@mui/material";
import styled from "styled-components";

const ButtonComponent = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border-radius> 0.3rem;
  margin: 0.3rem;

  padding: 0
    ${(props) =>
      props.size === "sm"
        ? "1.1rem"
        : props.size === "md"
        ? "1.4rem"
        : props.size === "lg"
        ? "1.6rem"
        : "1.1rem"};

    height: ${(props) =>
      props.size === "sm"
        ? "34px"
        : props.size === "md"
        ? "37px"
        : props.size === "lg"
        ? "40px"
        : "34px"};
    font-famlily: "Inter", sans-serif;
    font-weight: 500;
    border: 1px solid transparent;
    
    background-color: ${(props) =>
      props.variant === "light"
        ? "#faf0ff"
        : props.variant === "dark"
        ? "#212529"
        : props.variant === "primary"
        ? "#2344d4"
        : props.variant === "secondary"
        ? "#237541"
        : props.variant === "success"
        ? "#23d841"
        : props.variant === "info"
        ? "#4d6fa0"
        : props.variant === "warning"
        ? "#b30410"
        : props.variant === "danger"
        ? "#ff0410"
        : "f8f9fa"}; 
        
      color :  ${(props) =>
        props.variant === "light"
          ? "#000000"
          : props.variant === "dark"
          ? "#ffff"
          : props.variant === "primary"
          ? "#ffff"
          : props.variant === "secondary"
          ? "#fffff"
          : props.variant === "success"
          ? "#ffff"
          : props.variant === "info"
          ? "#ffff"
          : props.variant === "warning"
          ? "#ffff"
          : props.variant === "danger"
          ? "#ffff"
          : "ffff"}; 
`;

const button = (props) => {
  const { type, variant, className, id, onClick, children } = props;
  return (
    <ButtonComponent
      {...props}
      type={type ? type : "button"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

export default button;

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
  border-radius: 0.3rem;
  margin: 3rem;

  padding: 0
    ${({ size }) =>
      size === "xs"
        ? "0.5rem"
        : size === "sm"
        ? "1.4rem"
        : size === "md"
        ? "1.4rem"
        : size === "lg"
        ? "1.6rem"
        : "1.1rem"};

  height: ${({ size }) =>
    size === "xs"
      ? "25px"
      : size === "sm"
      ? "34px"
      : size === "md"
      ? "37px"
      : size === "lg"
      ? "40px"
      : "34px"};

  font-famlily: "Inter", sans-serif;
  font-weight: 500;
  border: 1px solid transparent;

  background-color: ${({ variant, theme }) =>
    theme[variant]
      ? theme[variant].backgroundColor
      : variant === "info"
      ? "#827777"
      : " black"};

  color: ${({ variant, theme }) =>
    theme[variant] ? theme[variant].textColor : "Red"};
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

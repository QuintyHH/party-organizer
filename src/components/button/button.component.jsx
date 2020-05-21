import React from "react";
import { StyledButton } from "./button.styles";

export const Button = ({
  children,
  icon,
  radius,
  background,
  width,
  padding,
  height,
  margin,
  color,
  onClick,
  onSubmit,
}) => {
  return (
    <StyledButton
      background={background}
      icon={icon}
      radius={radius}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      color={color}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </StyledButton>
  );
};

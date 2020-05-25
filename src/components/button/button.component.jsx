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
  display,
  onClick,
  onSubmit,
  position,
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
      display={display}
      onClick={onClick}
      onSubmit={onSubmit}
      position={position}
    >
      {children}
    </StyledButton>
  );
};

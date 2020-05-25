import React from "react";
import styled from "styled-components";

const SButtonWrapper = styled.div`
  justify-content: center;
  color: ${(prop) => (prop.color ? prop.color : "#b2b2b2")};
  box-sizing: border-box;
  justify-content: center;
  display: ${(prop) => (prop.display ? prop.display : "flex")};
  width: ${(prop) => (prop.width ? prop.width : "max-content")};
  height: ${(prop) => (prop.height ? prop.height : "fit-content")};
  padding: ${(prop) => (prop.padding ? prop.padding : "1rem")};
  background-color: ${(prop) => prop.background};
  border-radius: ${(prop) => (prop.radius ? prop.radius : "50px")};
  margin: ${(prop) => (prop.margin ? prop.margin : "auto")};
  border: ${(prop) => (prop.radius ? "1px solid #b2b2b2;" : null)};
  position: ${(prop) => (prop.position ? prop.position : "initial")};
  cursor: pointer;
`;

const SButtonText = styled.div`
  margin: auto;
  font-size: 1rem;
  text-decoration: none;
`;

const SButtonIcon = styled.div`
  background-image: url(${(prop) => (prop.icon ? prop.icon : null)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: auto 0 auto 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50px;
`;

export const StyledButton = ({
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
  display,
  position,
}) => {
  return (
    <SButtonWrapper
      data-test-id="button"
      background={background}
      radius={radius}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      color={color}
      onClick={onClick}
      onSubmit={onSubmit}
      display={display}
      position={position}
    >
      {icon ? (
        <SButtonIcon data-test-id="button-icon" icon={icon}></SButtonIcon>
      ) : null}
      <SButtonText data-test-id="button-text">{children}</SButtonText>
    </SButtonWrapper>
  );
};

export const ButtonGroup = styled.div`
  border-radius: 50px;
  border: 1px solid #b2b2b2;
  display: flex;
  padding: 0 10px;
`;

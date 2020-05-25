import styled from "styled-components";

export const NavMenu = styled.div`
  width: 100%;
  margin: auto;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  color: #b2b2b2;
  font-size: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr auto;
  grid-gap: 5px;
  z-index: 2;
`;

export const NavMenuDiv = styled.div`
  width: 100%;
  margin: auto;
  background-color: #ffffff;
  color: #b2b2b2;
  font-size: 1rem;
  box-sizing: border-box;
  display: flex;
`;

export const NavAvatar = styled.div`
  background-image: url(${(prop) => (prop.icon ? prop.icon : null)});
  height: 2rem;
  width: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 100%;
  border: 1px solid #b2b2b2;
  display: flex;
  margin: auto;
`;

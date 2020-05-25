import styled from "styled-components";

export const StyledPartyRow = styled.div`
  padding: 1rem;
  height: 5rem;
  width: 100%;

  box-sizing: border-box;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 4rem 1fr 1fr 1fr 1fr 4rem 4rem;
`;

export const PartyListWrapper = styled.div`
  margin: 2rem;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  min-width: fit-content;
  padding-bottom: 0.5rem;
`;

export const PartyListImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  margin: auto;
  cursor: pointer;
`;

export const PartyListImgTiny = styled.img`
  width: 2rem;
  height: 2rem;
  margin: auto;
  cursor: pointer;
`;

export const PartyListText = styled.div`
  font-size: 1rem;
  color: grey;
  display: flex;
  margin: auto 10px;
`;

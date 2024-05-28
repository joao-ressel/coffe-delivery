import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const LocalDiv = styled.div`
  display: flex;
  align-items: center;

  padding: 0.5rem;

  background: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-700"]};

  border-radius: 8px;
  font-size: 0.85rem;
`;
export const HeaderItems = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ShoppingCard = styled.a`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-700"]};

  border-radius: 8px;
`;

import styled from "styled-components";

export const ContainerCheckout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;

  grid-column-start: 1;
  grid-column-end: 2;

  margin: 1rem;
  gap: 1rem;

  h2 {
    font-family: "Baloo 2";
    font-size: 1.2rem;
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-900"]};
    svg {
      color: ${(props) => props.theme["yellow-700"]};
    }
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2.5rem;
  border-radius: 0.45rem;

  background-color: ${(props) => props.theme["gray-200"]};
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ButtonPay = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;

  gap: 0.75rem;
  padding: 1rem;

  border-radius: 8px;
  border: none;

  line-height: 1.6;
  font-size: 0.75rem;
  background-color: ${(props) => props.theme["gray-400"]};
  svg {
    color: ${(props) => props.theme["purple-500"]};
  }
`;

export const ContainerCart = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-family: "Baloo 2";
    font-size: 1.2rem;
  }
`;

export const ContainerItemsCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;

  border-radius: 0.45rem 2rem 0.45rem 2rem;
  background-color: ${(props) => props.theme["gray-200"]};
`;

export const ListCoffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ButtonConfirm = styled.button`
  display: flex;
  justify-content: center;

  padding: 0.75rem;

  background-color: ${(props) => props.theme["yellow-500"]};
  color: ${(props) => props.theme["gray-100"]};

  border: 0;
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: bold;

  &&:hover {
    background-color: ${(props) => props.theme["yellow-700"]};
  }
`;

export const ShoppingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TextLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

export const TextLineBold = styled(TextLine)`
  font-weight: bold;
  font-size: 1.25rem;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme["gray-400"]};
`;

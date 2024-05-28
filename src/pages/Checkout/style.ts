import styled from "styled-components";

export const ContainerCheckout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 2rem;
`;

export const ContainerForm = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
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
  gap: 1rem;

  padding: 2.5rem;
  border-radius: 0.45rem 2rem 0.45rem 2rem;
  background-color: ${(props) => props.theme["gray-200"]};
`;

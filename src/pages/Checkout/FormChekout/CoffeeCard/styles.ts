import styled from "styled-components";

export const Coffee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 16rem;
  height: auto;

  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 0.375rem 2.5rem 0.375rem 2.5rem;

  text-align: center;
  padding: 0 2rem 1.25rem;

  img {
    width: 120px;
    align-self: center;
    margin-top: -20px;
  }

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    line-height: 1;
    color: ${(props) => props.theme["gray-900"]};
  }

  p {
    color: ${(props) => props.theme["gray-600"]};
    font-size: 0.875rem;
    line-height: 1.3;
  }

  span {
    color: ${(props) => props.theme["gray-700"]};
    display: flex;
    font-size: 0.875rem;

    p {
      font-size: 1.5rem;
      font-family: "Baloo 2", sans-serif;
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

export const CoffeeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CoffeeTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  span {
    width: auto;
    padding: 0.2rem 0.4rem;
    border-radius: 16px;

    font-weight: bold;
    font-size: 0.625rem;

    color: ${(props) => props.theme["yellow-700"]};
    background-color: ${(props) => props.theme["yellow-100"]};
  }
`;

export const FooterCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  justify-content: space-between;
  margin-top: 1rem;

  span {
    display: flex;
    align-items: center;
  }
`;

export const ButtonShopping = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.3rem;
  height: 2.3rem;

  border-radius: 8px;
  border: none;

  font-size: 1.5rem;

  color: ${(props) => props.theme["yellow-100"]};
  background-color: ${(props) => props.theme["purple-700"]};
`;

export const FooterCardInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.5rem;
  border-radius: 4px;
  padding: 0 0.5rem;

  background-color: ${(props) => props.theme["gray-400"]};

  input[type="number"] {
    width: 2rem;

    background: transparent;
    padding: 0 0.65rem;

    border: none;
    outline: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    width: 2rem;

    :hover {
      cursor: pointer;
    }
    
    svg {
      background-color: none;
      color: ${(props) => props.theme["purple-700"]};
    }
  }
`;

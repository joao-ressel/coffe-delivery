import styled from "styled-components";

export const InfoCardButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ImageInfo = styled.div`
  display: flex;
  gap: 1.25rem;
`;
export const ButtonsGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Coffee = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0.35rem;
  justify-content: space-between;


  img {
    width: 64px;
    align-self: center;
    margin-top: -20px;
  }

  h3 {
    font-size: 1rem;
    line-height: 1;
    font-weight: normal;
    color: ${(props) => props.theme["gray-900"]};
  }

  p {
    color: ${(props) => props.theme["gray-900"]};
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border-radius: 0.37rem;
  padding: 0 0.5rem;

  background-color: ${(props) => props.theme["gray-400"]};
  border: 0;

  font-size: 0.75rem;
  svg {
    background-color: none;
    color: ${(props) => props.theme["purple-700"]};
  }
`;

export const InputNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.5rem;
  height: 2rem;
  border-radius: 0.37rem;
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



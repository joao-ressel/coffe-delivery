import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2.5rem;
  border-radius: 0.45rem;
  background-color: ${(props) => props.theme["gray-200"]};
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

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  width: 100%;
`;

export const InputForm = styled.input`
  color: ${(props) => props.theme["gray-700"]};
  background-color: ${(props) => props.theme["gray-300"]};

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["gray-400"]};

  padding: 1rem;
  width: 275px;

  ::placeholder {
    color: ${(props) => props.theme["gray-400"]};
    font-size: 0.875rem;
  }
`;

export const InputFormNormal = styled(InputForm)`
  width: 200px;
  flex: 1;
`;

export const InputFormPequeno = styled(InputForm)`
  width: 60px;
`;

export const InputFormMedio = styled(InputForm)`
  width: 348px;
  flex: 2;
`;

export const InputFormTotal = styled(InputForm)`
  width: 100%;
`;

import styled from "styled-components";

export const ContainerConfirmation = styled.div`
  display: flex;
  margin-top: 5rem;
  align-items: end;
  gap: 6.3rem;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 492px;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  flex: 1;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-700"]};
  }

  p {
    font-size: 1.25rem;
  }
`;
export const InfoPart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  p {
    font-size: 1rem;
  }
  span {
    font-weight: bold;
  }
`;
export const IconPurple = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme["purple-500"]};
`;

export const IconYellow = styled(IconPurple)`
  background-color: ${(props) => props.theme["yellow-500"]};
`;
export const IconOrange = styled(IconPurple)`
  background-color: ${(props) => props.theme["yellow-700"]};
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border: 1px solid transparent;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(
      45deg,
      ${(props) => props.theme["gray-100"]},
      ${(props) => props.theme["gray-100"]}
    ),
    linear-gradient(
      45deg,
      ${(props) => props.theme["yellow-700"]},
      ${(props) => props.theme["purple-700"]}
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

import styled from "styled-components";

export const ContainerCoffeeList = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding-bottom: 10rem;

  h2 {
    font-family: "Baloo 2";
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;

export const ContainerCoffees = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
  width: 100%;
`;

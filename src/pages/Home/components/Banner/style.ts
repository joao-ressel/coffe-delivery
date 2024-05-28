import styled from "styled-components";
import { defaultTheme } from "../../../../styles/themes/defalt";

export type ItemVariant = "darkYellow" | "gray" | "yellow" | "purple";

interface ItemsVariantProps {
  variant: ItemVariant;
}

export const itemsVariants = {
  darkYellow: defaultTheme["yellow-700"],
  gray: defaultTheme["gray-700"],
  yellow: defaultTheme["yellow-500"],
  purple: defaultTheme["purple-500"],
};

export const ContainerBanner = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 5.75rem 0;
`;

export const TextBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  width: 100%;

  h1 {
    font-family: "Baloo 2";
    font-weight: bolder;
    line-height: 1;
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
  }
`;
export const ItemsBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 36rem;
`;
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  width: 100%;
  margin-top: 4rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItemsCircle = styled.div<ItemsVariantProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  color: ${(props) => props.theme["gray-100"]};
  background-color: ${(props) => itemsVariants[props.variant]};
`;

export const ImgBanner = styled.div`
  img {
    height: 360px;
  }
`;

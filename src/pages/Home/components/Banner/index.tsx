import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import CoffeeBanner from "../../../../assets/coffee-imagem-banner.png";
import {
  ContainerBanner,
  ItemsBanner,
  TextBanner,
  ImgBanner,
  Items,
  ItemsCircle,
  Item,
} from "./style";

export function Banner() {
  return (
    <ContainerBanner>
      <ItemsBanner>
        <TextBanner>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TextBanner>
        <Items>
          <Item>
            <ItemsCircle variant="darkYellow">
              <ShoppingCart />
            </ItemsCircle>
            <p>Compra simples e segura</p>
          </Item>
          <Item>
            <ItemsCircle variant="gray">
              <Package />
            </ItemsCircle>
            <p>Embalagem mantém o café intacto</p>
          </Item>
          <Item>
            <ItemsCircle variant="yellow">
              <Timer />
            </ItemsCircle>
            <p>Entrega rápida e rastreada</p>
          </Item>
          <Item>
            <ItemsCircle variant="purple">
              <Coffee />
            </ItemsCircle>
            <p>O café chega fresquinho até você</p>
          </Item>
        </Items>
      </ItemsBanner>

      <ImgBanner>
        <img src={CoffeeBanner} />
      </ImgBanner>
    </ContainerBanner>
  );
}

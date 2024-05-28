import {
  CoffeeTags,
  CoffeeText,
  FooterCard,
  ButtonShopping,
  FooterCardInput,
} from "./styles";
import { Coffee } from "./styles";
import coffeeImg from "../../../../../assets/Expresso.png";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

export function CoffeeCard() {
  return (
    <Coffee>
      <img src={coffeeImg} />
      <CoffeeTags>
        <span>TRADICIONAL</span>
      </CoffeeTags>
      <CoffeeText>
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeText>
      <FooterCard>
        <span>
          R$<p> 9,90</p>
        </span>
        <FooterCardInput>
          <span>
            <Plus weight="bold" />
          </span>
          <input type="number" value={1} />
          <span>
            <Minus weight="bold" />
          </span>
        </FooterCardInput>
        <ButtonShopping>
          <ShoppingCart weight="fill" size={22} />
        </ButtonShopping>
      </FooterCard>
    </Coffee>
  );
}

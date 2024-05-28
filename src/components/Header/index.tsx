import { HeaderContainer, HeaderItems, LocalDiv, ShoppingCard } from "./style";
import LogoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} />
      <HeaderItems>
        <LocalDiv>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocalDiv>
        <ShoppingCard>
          <ShoppingCart size={24} weight="fill" />
        </ShoppingCard>
      </HeaderItems>
    </HeaderContainer>
  );
}

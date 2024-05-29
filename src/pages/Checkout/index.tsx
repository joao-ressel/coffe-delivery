import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import {
  ButtonConfirm,
  ButtonPay,
  ContainerButtons,
  ContainerCart,
  ContainerCheckout,
  ContainerForm,
  ContainerItemsCart,
  HeaderCard,
  Line,
  ListCoffee,
  PayContainer,
  ShoppingInfo,
  TextLine,
  TextLineBold,
} from "./style";
import { FormCheckout } from "./FormChekout";
import { CoffeeCard } from "./CoffeeCard";

export function Checkout() {
  return (
    <ContainerCheckout>
      <ContainerForm>
        <h2>Complete seu pedido</h2>
        <FormCheckout />
        <PayContainer>
          <HeaderCard>
            <h3>
              <CurrencyDollar /> Pagamento
            </h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </HeaderCard>
          <ContainerButtons>
            <ButtonPay>
              <CreditCard size={16} /> CATÃO DE CRÉDITO
            </ButtonPay>
            <ButtonPay>
              <Bank size={16} /> CATÃO DE DÉBITO
            </ButtonPay>
            <ButtonPay>
              <Money size={16} /> DINHEIRO
            </ButtonPay>
          </ContainerButtons>
        </PayContainer>
      </ContainerForm>
      <ContainerCart>
        <h2>Cafés selecionados</h2>
        <ContainerItemsCart>
          <ListCoffee>
            <CoffeeCard />
            <Line />
            <CoffeeCard />
            <Line />
          </ListCoffee>
          <ShoppingInfo>
            <TextLine>
              <p>Total de itens </p>
              <span>R$ 29,70</span>
            </TextLine>
            <TextLine>
              <p>Entrega </p>
              <span>R$ 3,50</span>
            </TextLine>
            <TextLineBold>
              <p>Total </p>
              <span>R$ 33,20</span>
            </TextLineBold>
            <ButtonConfirm>CONFIRMAR PEDIDO</ButtonConfirm>
          </ShoppingInfo>
        </ContainerItemsCart>
      </ContainerCart>
    </ContainerCheckout>
  );
}

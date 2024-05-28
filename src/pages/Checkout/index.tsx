import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import {
  ButtonPay,
  ContainerButtons,
  ContainerCart,
  ContainerCheckout,
  ContainerForm,
  ContainerItemsCart,
  HeaderCard,
  PayContainer,
} from "./style";
import { FormCheckout } from "./FormChekout";

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
              <CreditCard size={20} /> CATÃO DE CRÉDITO
            </ButtonPay>
            <ButtonPay>
              <Bank size={20} /> CATÃO DE DÉBITO
            </ButtonPay>
            <ButtonPay>
              <Money size={20} /> DINHEIRO
            </ButtonPay>
          </ContainerButtons>
        </PayContainer>
      </ContainerForm>
      <ContainerCart>
        <h2>Cafés selecionados</h2>
        <ContainerItemsCart></ContainerItemsCart>
      </ContainerCart>
    </ContainerCheckout>
  );
}

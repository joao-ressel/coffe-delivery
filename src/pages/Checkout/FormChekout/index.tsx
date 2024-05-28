import { MapPin } from "@phosphor-icons/react";
import {
  Form,
  HeaderCard,
  InputForm,
  InputFormMedio,
  InputFormNormal,
  InputFormPequeno,
  InputFormTotal,
  InputGroup,
} from "./styles";

export function FormCheckout() {
  return (
    <Form>
      <HeaderCard>
        <h3>
          <MapPin /> Endereço de Entrega
        </h3>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </HeaderCard>
      <InputFormNormal type="text" name="cep" placeholder="CEP" />
      <InputFormTotal type="text" name="rua" placeholder="Rua" />
      <InputGroup>
        <InputFormNormal type="text" name="numero" placeholder="Número" />
        <InputFormMedio
          type="text"
          name="complemento"
          placeholder="Complemento"
        />
      </InputGroup>
      <InputGroup>
        <InputFormMedio type="text" name="bairro" placeholder="Bairro" />
        <InputForm type="text" name="cidade" placeholder="Cidade" />
        <InputFormPequeno type="text" name="uf" placeholder="UF" />
      </InputGroup>
    </Form>
  );
}

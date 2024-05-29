import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import Illustration from "../../assets/Illustration.png";
import {
  ContainerConfirmation,
  ContainerInfo,
  ContainerLeft,
  ContainerText,
  IconOrange,
  IconPurple,
  IconYellow,
  Img,
  InfoPart,
} from "./style";

export function Success() {
  return (
    <ContainerConfirmation>
      <ContainerLeft>
        <ContainerText>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </ContainerText>

        <ContainerInfo>
          <InfoPart>
            <IconPurple>
              <MapPin size={16} />
            </IconPurple>
            <p>
              Entrega em <span> Rua João Daniel Martinelli, 102 </span> Farrapos
              - Porto Alegre, RS
            </p>
          </InfoPart>
          <InfoPart>
            <IconYellow>
              <Timer size={16} />
            </IconYellow>
            <p>
              Previsão de entrega<span> 20 min - 30 min </span>
            </p>
          </InfoPart>
          <InfoPart>
            <IconOrange>
              <CurrencyDollar size={16} />
            </IconOrange>
            <p>
              Pagamento na entrega
              <span> Cartão de Crédito </span>
            </p>
          </InfoPart>
        </ContainerInfo>
      </ContainerLeft>
      <Img src={Illustration} alt="" />
    </ContainerConfirmation>
  );
}

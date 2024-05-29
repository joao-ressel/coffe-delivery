import {
  ButtonRemove,
  InfoCardButtons,
  ButtonsGroup,
  InputNumber,
  ImageInfo,
} from "./styles";
import { Coffee } from "./styles";
import coffeeImg from "../../../assets/Expresso.png";
import { Minus, Plus, Trash } from "@phosphor-icons/react";

export function CoffeeCard() {
  return (
    <Coffee>
      <ImageInfo>
        <img src={coffeeImg} />
        <InfoCardButtons>
          <h3>Expresso Tradicional</h3>
          <ButtonsGroup>
            <InputNumber>
              <span>
                <Plus size={14} weight="bold" />
              </span>
              <input type="number" value={1} />
              <span>
                <Minus size={14} weight="bold" />
              </span>
            </InputNumber>
            <ButtonRemove>
              <Trash size={12} />
              REMOVER
            </ButtonRemove>
          </ButtonsGroup>
        </InfoCardButtons>
      </ImageInfo>
      <p>R$ 9,90</p>
    </Coffee>
  );
}

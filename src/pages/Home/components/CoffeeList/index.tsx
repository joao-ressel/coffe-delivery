import { CoffeeCard } from "./CoffeeCard";
import { ContainerCoffeeList, ContainerCoffees } from "./styles";

export function CoffeeList() {
  return (
    <ContainerCoffeeList>
      <h2>Nossos Cafés</h2>
      <ContainerCoffees>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </ContainerCoffees>
    </ContainerCoffeeList>
  );
}

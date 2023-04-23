import { MenuItemsContainer } from "./MenuItemsContainer";
import { NewItemFormContainer } from "./NewItemFormContainer";
import { TipSelectContainer } from "./TipSelectContainer";
import { SummaryContainer } from "./SummaryContainer";

export default function Calculator() {
  return (
    <div>
      <NewItemFormContainer />
      <MenuItemsContainer />
      <TipSelectContainer />
      <SummaryContainer />
    </div>
  );
}

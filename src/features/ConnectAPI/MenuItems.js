import { MenuItemContainer } from "./MenuItemContainer";

export default function MenuItems({ items }) {
  return (
    <>
      <h2>Menu items</h2>
      {items
        ? items.map((item) => <MenuItemContainer key={item.uuid} item={item} />)
        : null}
    </>
  );
}

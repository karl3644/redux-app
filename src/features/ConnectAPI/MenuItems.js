import MenuItem from "./MenuItem"

export default function MenuItems({items}) {
    return (
        items ? items.map(item => (
            <MenuItem item={item} />
        )) : null
    )

}
import { connect } from "react-redux";
import MenuItems from "./MenuItems";

const mapStatetoProps = (state) => {
    return {
        items: state.items
    };
};

export const MenuItemsContainer = connect(mapStatetoProps)(MenuItems)
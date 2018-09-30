/** Dependencies **/
import EcomAssetBase from "../base/EcomAssetBase";

/** Child Components **/
import CartItem from "./CartItem";

/** Styles **/
import "../styles/cart.scss";

export default class Cart extends EcomAssetBase {
    constructor(props) {
        super(props);
        this.initializeState();
    }

    initializeState() {
        this.state = {
            Items: {}
        }
    }

    addItem(Item) {
        if(Item.SKU) {
            this.Items[Item.SKU] = Item;
        } else {
            throw new Error("Cannot add an Item to a Cart without a SKU.");
        }
    }

    removeItem(SKU) {
        if(this.Items[SKU]) {
            delete this.Items[SKU];
        } else {
            throw new Error("Cannot delete a non-existent Item from a cart.");
        }
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {

    }
}
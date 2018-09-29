/** Dependencies **/
import EcomAssetBase from "../base/EcomAssetBase";

/** Child Components **/
import CheckoutItem from "./CheckoutItem";

/** Styles **/
import "../styles/cart.scss";

export default class Checkout extends EcomAssetBase {
    constructor(props) {
        super(props);
        this.state = this.initializeState(props);
    }

    initializeState(props) {
        this.state.CheckoutItems = props.CheckoutItems;
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    createChildren() {
        const children = [];

        this.state.CheckoutItems.forEach((CheckoutItem) => {
            children.push(<CheckoutItem item={CheckoutItem}></CheckoutItem>);
        });

        return children;
    }

    render() {
        return (
            <div class="ecomaCheckout">
                {
                    this.createChildren()
                }
            </div>
        )
    }
}
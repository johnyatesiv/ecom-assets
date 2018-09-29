/** Dependencies **/
import EcomAssetBase from "../base/EcomAssetBase";

/** Child Components **/

/** Styles **/
import "../styles/cart.scss";

export default class CheckoutItem extends EcomAssetBase {
    constructor(props) {
        super(props);
        this.state = this.initializeState(props);
    }

    initializeState(props) {
        this.Item = props.Item;
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        return (
            <div class="ecomaCheckoutItem">

            </div>
        );
    }
}
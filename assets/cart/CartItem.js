/** Dependencies **/
import EcomAssetBase from "../base/EcomAssetBase";

/** Child Components **/

/** Styles **/
import "../styles/cartItem.scss";

export default class CartItem extends EcomAssetBase {
    constructor(props) {
        super(props);
        this.state = this.initializeState();
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        return (
            <div class="ecomaCartItem">

            </div>
        );
    }
}
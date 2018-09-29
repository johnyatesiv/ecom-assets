/** Dependencies **/
import Item from "./Item";
import Checkout from "../checkout/Checkout";

/** Child Components **/

/** Styles **/

/** Globals **/
const NEW_STATE = "New";
const PROCESSED_STATE = "Processed";
const CANCELLED_STATE = "Cancelled";
const ABANDONED_STATE = "Abandoned";

export default class Order {
    constructor(Items) {
        this.Total = 0;
        this.State = NEW_STATE;

        if(Items) {
            this.Items = Items;
            this.ItemCount = Object.keys(Items).length;
        } else {
            this.Items = {};
            this.ItemCount = 0;
        }
    }

    /**
     * cancel
     */
    cancel() {
        this.State = CANCELLED_STATE;
    }

    /**
     * process
     */
    process() {
        this.State = PROCESSED_STATE;
        return new Checkout();
    }

    abandon() {
        this.State = ABANDONED_STATE;
    }

    /**
     * addItem
     * Adds an Item to the Order
     * @param Item
     * @param Quantity
     */
    addItem(Item, Quantity) {
        if(Item.SKU) {
            this.Items[Item.SKU] = Item;

            if(!Quantity) {
                Quantity = 1;
            }

            this.Items[Item.SKU].Quantity = Quantity;
            this.Total += Item.GrossCost;

            this.ItemCount++;
        } else {
            throw new Error("Cannot add Item to Order without a SKU.");
        }
    }

    /**
     * addItems
     * Adds multiple Items to the Order
     * @param Items
     */
    addItems(Items) {
        Items.forEach((Item) => {
            this.addItem(Item);
        });
    }

    /**
     * removeItem
     * @param SKU
     */
    removeItem(SKU) {
        if(this.Items[SKU]) {
            delete this.Items[SKU];
            this.ItemCount--;
        } else {
            throw new Error("Cannot remove a non-existent Item from an Order.");
        }
    }

    /**
     * removeItems
     * @param SKUs
     */
    removeItems(SKUs) {
        SKUs.forEach((SKU) => {
            this.removeItem(SKU)
        })
    }
}
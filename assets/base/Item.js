/** Dependencies **/

/** Child Components **/

/** Styles **/

export default class Item {
    constructor(SKU, Cost, Quantity) {
        this.SKU = SKU;
        this.UnitCost = Cost;
        this.Quantity = Quantity;
    }

    /** Getters and Setters, if required **/
    get GrossCost() {
        return (this.UnitCost*this.Quantity);
    }

}
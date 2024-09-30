class cart extends product{
    constructor(name,price, quantity){
        super(price,name)
        this.quantity=quantity
    
    }

   totalPrice = ()=>{
    this.quantity * this.price

    }
}
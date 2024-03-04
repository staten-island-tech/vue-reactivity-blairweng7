import { reactive } from "vue"

export const store = reactive ({
    items:[],
    cart: [],
    totalPrice: [],
    count: 0,
    increment(){
        this.count++
    },
    addToCart(item){
        this.cart.push(item);
        this.totalPrice(item.price);
    }
})
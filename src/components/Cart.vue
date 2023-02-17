<template>
    <div class="cart">
        <div class="grid">
            <div class="header">
                <div class="product_name">Sản phẩm</div>
                <div class="price">Đơn giá</div>
                <div class="quantity">Số lượng</div>
                <div >Số tiền</div>
                <div class="remove">Thao tác</div>
            </div>
            <div class="list" >
                <div class="list_item" v-for="product in cart" >
                    <div class="product">
                        <!-- <img class="product_img" :src="product.thumbnail" alt=""> -->
                        <div class="product_name">{{product.title}}</div>
                    </div>
                    <div class="price">${{product.price}}</div>
                    <div class="quantity">{{product.quantity}}</div>
                    <div class="total_price">
                        <p class="price_before">${{product.total}}</p>
                        <p class="price_after">${{product.discountedPrice}}</p>
                    </div>
                    <div class="remove">Xóa</div>
                </div>
            </div>
            <div class="pay" v-if="total">
                <div class="total_pay">
                    Tổng thanh toán: <b style="color: #f53d2d">${{total}}</b> 
                </div>
                <div class="buy">
                    Mua
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'Cart',
    data() {
      return{
        cart: null,
        id: null,
        total: null
      }
    },
    // computed: {
    //     all() {
    //         return this.$store.state.all
    //     }
    // },
    created() {
        fetch('https://dummyjson.com/carts/user/' + `${this.$store.state.dataUser.id}`)
        .then(res => res.json())
        .then(data => (
            this.cart = data.carts[0].products, 
            this.total = data.carts[0].discountedTotal
        ));
    }
}
</script>

<style scoped>
.cart{
    padding-top: 120px;
    background-color: rgb(235, 242, 249);
}

.grid{
    background-color: var(--white-color);
}

.header{
    display: grid;
    grid-template-columns: 500px 150px 150px 150px 150px;
    justify-content: center;
    margin: 20px 0px;
    font-size: 1.4rem;
    color: rgb(118, 111, 111);
    padding: 10px 5px;
}

.list_item{
    display: grid;
    grid-template-columns: 500px 150px 150px 150px 150px;
    justify-content: center;
    margin: 20px 10px;
    font-size: 1.4rem;
    padding: 10px 5px;
    border: 1px solid rgb(235, 220, 220);
    align-items: center;
}

.product{
    display: flex;
    align-items: center;
}
.product_img{
    height: 80px;
    width: 80px;
    margin-right: 20px;
}

.total_price{
    display: flex;
}

.price_before{
    margin-right: 5px;
    text-decoration: line-through;
    color: rgb(162, 151, 151);
}

.price_after{
    color: #f53d2d;
}

.pay{
    align-items: center;
    text-align: center;
}
.total_pay{
    font-size: 1.4rem;
}
.buy{
    background-color: #f53d2d;
    margin: 20px 500px;
    padding: 10px 0;
    color: var(--white-color);
    font-size: 1.4rem;
}

.buy:hover{
    background-color: #ee5143;
    cursor: pointer;
}

</style>

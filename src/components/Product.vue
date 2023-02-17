<template>
    <div class="product" v-if="product" >
      <div class="grid">
        <div class="product_image">
          <img :src="product.thumbnail" alt="">
          <div class="link">
            <p class="social">
              Chia sẻ: 
              <font-awesome-icon class="icon mess" icon="fa-brands fa-facebook-messenger" />
              <font-awesome-icon class="icon fb " icon="fa-brands fa-facebook" />
              <font-awesome-icon class="icon pint" icon="fa-brands fa-pinterest" />
              <font-awesome-icon class="icon tw" icon="fa-brands fa-twitter" />
            </p>
            <p class="liked">
              <font-awesome-icon class="icon heart" icon="fa-regular fa-heart" />
              Đã thích (11,6k)
            </p>
          </div>
        </div>
        <div class="product_information">
          <header class="product_name">
            {{ product.title }}
          </header>
          <div class="product_rating">
            Đánh giá: {{product.rating}}
            <font-awesome-icon class="star" icon="fa-solid fa-star" />
            <font-awesome-icon class="star" icon="fa-solid fa-star" />
            <font-awesome-icon class="star" icon="fa-solid fa-star" />
            <font-awesome-icon class="star" icon="fa-solid fa-star" />
            <font-awesome-icon class="star" icon="fa-solid fa-star" />
          </div>
          <div class="product_price">
            <div class="price_before">
              ${{ product.price }}
            </div>
            <div class="price_after">
              ${{ Math.round((product.price * (1-product.discountPercentage/100))) }}
            </div>
            <div class="price_discount">
              {{Math.round(product.discountPercentage)}}% GIẢM
            </div>
          </div>
          <div class="product_brand">
            Thương Hiệu: {{product.brand}}
          </div>
          <div class="product_description">
            Mô tả sản phầm: {{product.description}}
          </div>
          <div class="product_count">
            Số lượng: 
            <div class="product_count_content">
              <div class="decrease" @click="decrease()">-</div>
              <div class="quantity large">{{count}}</div>
              <div class="increase" @click="increase()">+</div>
            </div>
          </div>
          <div class="product_add" @click="add()">
            <font-awesome-icon icon="fa-solid fa-cart-plus" />
            Thêm Vào Giỏ Hàng
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
    name: 'product',
    data() {
      return{
        product: null,
        count: 1,
        // added: null
      }
    },
    methods:{
      increase() {
        this.count++
      },
      decrease() {
        if(this.count > 1)
        this.count--
      },

      async add() {
        this.$toasted.show("Đã thêm vào giỏ hàng")

      //   const response = await fetch('https://dummyjson.com/carts/add', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({
      //       userId: this.$store.state.dataUser.id ,
      //       products: [
      //         {
      //           id: this.product.id,
      //           quantity: this.count,
      //         },
      //       ]
      //     })
      //   })
      //   const data = await response.json()
      //   // this.added = await data
      //   this.$store.dispatch('createProduct', Object.assign({}, ...data) )
      }
    },
    created() {
      fetch('https://dummyjson.com/products/' + `${this.$route.params.id}`)
      .then(res => res.json())
      .then(data => (this.product = data));
    },
}
  
</script>
  
  
<style scoped>

.product{
  padding-top: 120px;
}

.grid{
  display: grid;
  grid-template-columns: 40% 60%;
}

.product_image{
  padding: 15px;

}

.product_image>img{
  width: 100%;
  width: 450px;
  height: 450px;
}

.link{
  display: flex;
  justify-content: space-around;
  font-size: 1.6rem;
  align-items: center;
}

.icon{
  font-size: 2rem;
}

.mess{
  color: rgb(84, 84, 231);
}

.fb{
  color: rgb(30, 71, 107);
}

.pint{
  color: rgb(192, 30, 30);
}

.tw{
  color: rgb(38, 221, 221);
}

.heart{
  color: rgb(252, 7, 105);
}


.product_information{
  padding: 20px;
}

.product_name{
  font-size: 2rem;
}
.product_rating{
  margin-top: 20px;
  font-size: 1.4rem;
  color: #ee4d2d;
}

.star{
  color: #ee4d2d;
}

.product_price{
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.price_before{
  font-size: 1.6rem;
  text-decoration: line-through;
  color: rgb(161, 168, 175);
  margin-right: 10px;
}
.price_after{
  font-size: 3rem;
  margin-right: 10px;
  color: #ee4d2d;
}
.price_discount{
  font-size: 1.2rem;
  background-color: #ee4d2d;
  color: var(--white-color);
  padding: 2px 4px;
  font-weight: bold;
}
.product_brand{
  margin-top: 25px;
  font-size: 1.4rem;
}
.product_description{
  margin-top: 25px;
  font-size: 1.4rem;
}
.product_count{
  margin-top: 25px;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
}

.product_count_content{
  display: flex;
  margin-left: 30px;
}

.decrease, .quantity, .increase{
  border: 1px solid rgb(172, 164, 164);
  width: 32px;
  align-items: center;
  height: 32px;
  text-align: center;
  padding: 7px;
}

.decrease:hover, .increase:hover{
  cursor: pointer;
}
.product_add{
  margin-top: 20px;
  font-size: 1.8rem;
  border: 1px solid #ee4d2d;
  height: 60px;
  width: 250px;
  text-align: center;
  align-items: center;
  padding: 20px 10px;
  color: #ee4d2d;
  background-color: #f7e4e0;
}

.product_add:hover{
  cursor: pointer;
  background-color: var(--white-color);
}

.large{
  width: 50px
}

</style>
  
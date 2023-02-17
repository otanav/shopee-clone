<template>
    <div class="menu">
      <div class="grid">
        <header class="menu_header">
          GỢI Ý HÔM NAY
        </header>
        <ul class="menu_list" v-if="moreProducts">
          <li class="list_item" v-for="product in moreProducts">
            <router-link :to="{name: 'ProductPage', params:{id : product.id}}" class="router" style="text-decoration: none; color: inherit;"> 
              <img :src="product.thumbnail" alt="">
              <p class="product_name">{{product.title}}</p>
              <div class="product_desc">
                <span class="product_price">${{Math.round((product.price * (1-product.discountPercentage/100)))}}</span>
                <span class="product_sold">đã bán 1,1k</span>
              </div>
              <div class="product_sale">
                <span class="percent">{{product.discountPercentage.toFixed(0)}}%</span>
                <span class="label">GIẢM</span>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="more">
          <div class="menu_more" v-on:click="loadMore()">
            Xem thêm
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
    name: 'mn',
    data() {
      return{
        products: [],
        loadMoreProduct: 0,
      }
    },
    methods: {
      loadMore() {
        this.loadMoreProduct += 6
      }
    },
    created() {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => (this.products = data.products));
    },

    computed: {
      moreProducts() {
        return this.products.slice(0, 12 + this.loadMoreProduct)
      }
    },


}
  
</script>
  
  
<style scoped>

.menu{
  padding-top: 20px;
  background-color: rgb(235, 242, 249);
  padding-bottom: 30px;
  border-bottom: 4px solid #ee4d2d;
}

.grid{
  background-color: var(--white-color);
}

.menu_header{
  height: 60px;
  padding: 15px 46px;
  width: 100%;
  font-size: 16px;
  color: #ee4d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  border-bottom: 4px solid rgb(238, 77, 45);
}

.menu_list{
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  background-color: rgb(235, 242, 249);
  padding-top: 20px;
}
.list_item{
  background-color: var(--white-color);
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  border: 1px solid rgb(233, 225, 225);
  position: relative;
  width: 190px;
  height: 255px;
}

.list_item:hover{
  cursor: pointer;
  border: 1px solid #ee4d2d;
  transform:  translateY(-2px);
}
.list_item>.router>img{
  width: 188px;
  height: 188px;
}

.product_desc{
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  font-size: 12px;
  color: #c2b9b7;
}

.product_price{
  color: #ee4d2d;
  font-weight: 600;
}

.product_name{
  text-align: left;
  height: 20px;
  padding: 0 5px;
  font-size: 12px;
  margin: 0 0 10px;
}

.product_sale{
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 30px;
  background-color: rgba(255, 216, 64, 0.9);
}

.product_sale::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  border-width: 0 20.5px 7px;
  border-style: solid;
  border-color: transparent rgba(255, 216, 64, 0.9) transparent rgba(255, 216, 64, 0.9);
}
.percent{
  color: #ee4d2d;
  font-weight: 600;
  font-size: 1.2rem;
}
.label{
  color: var(--white-color);
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: 500;
}

.menu_more{
  display: flex;
  justify-content: center;
  margin: auto;
  width: 30%;
  border: 1px solid #c2b9b7;
  height: 40px;
  align-items: center;
  background-color: var(--white-color);
  font-size: 14px;
  color: #6b6766;
}

.menu_more:hover{
  background-color: rgb(235, 242, 249);
  cursor: pointer;
}

.more{
  background-color: rgb(235, 242, 249);
  padding-top: 20px;
}

</style>
  
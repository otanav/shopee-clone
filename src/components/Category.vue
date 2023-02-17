<template>
    <div class="category">
      <div class="grid">
        <div class="header">
          <div class="header_content">Sắp xếp theo</div>
          <div class="header_content box">Phổ biến</div>
          <div class="header_content box">Mới nhất</div>
          <div class="header_content box">Bán chạy</div>
            <select class="header_content box" v-model="selectedPrice" v-on:change="filteredProduct">
              <option :value="''" selected hidden>Giá: </option>
              <option :value="'up'">Giá: Thấp đến cao</option>
              <option :value="'down'">Giá: Cao đến thấp</option>
            </select>
        </div>
        <div class="menu">
          <ul class="menu_list">
            <li class="list_item" v-for="product in products">
            <router-link :to="{name: 'ProductPage', params:{id : product.id}}" class="router" style="text-decoration: none; color: inherit;"> 
              <img :src="product.thumbnail" alt="">
              <p class="product_name">{{product.title}}</p>
              <div class="product_desc">
                <span class="product_price">${{product.price }}</span>
                <span class="product_sold">đã bán 1,1k</span>
              </div>
              <div class="product_sale">
                <span class="percent">{{product.discountPercentage.toFixed(0)}}%</span>
                <span class="label">GIẢM</span>
              </div>
            </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
    data() {
      return{
        products: null,
        selectedPrice: ''
      }
    },
    methods:{
      filteredProduct: function () {
            return this.products.sort((a, b) => {
              if (this.selectedPrice === 'up') {
                return a.price - b.price;
              } else if (this.selectedPrice === 'down') {
                return b.price - a.price;
              }
            });
        }
    },
    created() {
      fetch('https://dummyjson.com/products/category/' + `${this.$route.params.category}`)
      .then(res => res.json())
      .then(data => (this.products = data.products.sort((a, b) => {
              if (this.selectedPrice === 'up') {
                return a.price - b.price;
              }
            })));
    },
}
</script>
  
  
<style scoped>
.category{
  padding-top: 120px;
  background-color: rgb(235, 242, 249);
}

.header{
  height: 60px;
  width: 100%;
  background-color: #ededed;
  display: flex;
  padding: 13px 20px;
  align-items: center;
  margin: 30px 0px 10px;
}

.header_content{
  padding: 5px 10px;
  font-size: 1.4rem;
  color: rgb(147, 139, 139);
}

.box{
  background-color: var(--white-color);
  margin-left: 10px;
  color: #000;
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

select{
  border: none;
}



  
</style>
  
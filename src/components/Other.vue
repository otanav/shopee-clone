<template>
    <div class="other">
      <div class="grid">
        <div class="category">
          <header class="header">
            DANH MỤC
          </header>
          <ul class="list">
            <li class="list_item" v-for=" category in categories">
              <router-link :to="{name: 'CategoryPage', params:{category : category[0]}} " class="category">
                <img class="item_img" :src="category[1]" alt="">
                <p class="item_desc">{{category[0]}}</p>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="sale">
          <div class="sale_header">
            <img src="../assets/slide/flashSale.png" alt="">
            <p class="all">Xem tất cả ></p>
          </div>
          <ul class="menu_list">
            <li class="menu_list_item">
              <img src="https://cf.shopee.vn/file/sg-11134201-22120-eertndvl7llvda_tn" alt="">
              <div class="product_desc">
                <span class="product_price">3.000đ</span>
              </div>
              <div class="product_sale">
                <span class="percent">10%</span>
                <span class="label">GIẢM</span>
              </div>
              <div class="product_sold">
                <b>
                  ĐÃ BÁN 35
                </b>
              </div>
            </li>
            <li class="menu_list_item">
              <img src="https://cf.shopee.vn/file/sg-11134201-22120-eertndvl7llvda_tn" alt="">
              <div class="product_desc">
                <span class="product_price">3.000đ</span>
              </div>
              <div class="product_sale">
                <span class="percent">10%</span>
                <span class="label">GIẢM</span>
              </div>
              <div class="product_sold">
                <b>
                  ĐÃ BÁN 35
                </b>
              </div>
            </li>
            <li class="menu_list_item">
              <img src="https://cf.shopee.vn/file/sg-11134201-22120-eertndvl7llvda_tn" alt="">
              <div class="product_desc">
                <span class="product_price">3.000đ</span>
              </div>
              <div class="product_sale">
                <span class="percent">10%</span>
                <span class="label">GIẢM</span>
              </div>
              <div class="product_sold">
                <b>
                  ĐÃ BÁN 35
                </b>
              </div>
            </li>
            <li class="menu_list_item">
              <img src="https://cf.shopee.vn/file/sg-11134201-22120-eertndvl7llvda_tn" alt="">
              <div class="product_desc">
                <span class="product_price">3.000đ</span>
              </div>
              <div class="product_sale">
                <span class="percent">10%</span>
                <span class="label">GIẢM</span>
              </div>
              <div class="product_sold">
                <b>
                  ĐÃ BÁN 35
                </b>
              </div>
            </li>
            <li class="menu_list_item">
              <img src="https://cf.shopee.vn/file/sg-11134201-22120-eertndvl7llvda_tn" alt="">
              <div class="product_desc">
                <span class="product_price">3.000đ</span>
              </div>
              <div class="product_sale">
                <span class="percent">10%</span>
                <span class="label">GIẢM</span>
              </div>
              <div class="product_sold">
                <b>
                  ĐÃ BÁN 35
                </b>
              </div>
            </li>
            <li class="menu_list_item">
              <img src="https://cf.shopee.vn/file/sg-11134201-22120-eertndvl7llvda_tn" alt="">
              <div class="product_desc">
                <span class="product_price">3.000đ</span>
              </div>
              <div class="product_sale">
                <span class="percent">10%</span>
                <span class="label">GIẢM</span>
              </div>
              <div class="product_sold">
                <b>
                  ĐÃ BÁN 35
                </b>
              </div>
            </li>
          </ul>
        </div>

        <div class="banner">
          <img class="banner_img" src="../assets/slide/img1.jpg" alt="">
          <img class="banner_img" src="../assets/slide/img1.jpg" alt="">
          <img class="banner_img" src="../assets/slide/img1.jpg" alt="">
        </div>

        <div class="mall">
          <header class="mall_header">
            <div class="header_item">
              <p class="mall_logo">
                SHOPEE MALL
              </p>
              <p class="mall_more">
                <font-awesome-icon class="icon" icon="fa-solid fa-rotate-left" />
                7 Ngày Miễn Phí Trả Hàng
              </p>
              <p class="mall_more">
                <font-awesome-icon class="icon" icon="fa-solid fa-shield" />
                Hàng Chính Hãng 100%
              </p>
              <p class="mall_more">
                <font-awesome-icon class="icon" icon="fa-solid fa-truck-fast" />
                Miễn Phí Vận Chuyển
              </p>
            </div>
            <p class="header_more">
              Xem tất cả >
            </p>
          </header>
          <div class="mall_container">
            <div class="mall_banner">
              <vueper-slides autoplay :touchable="false" fixed-height=100%>
                <vueper-slide
                  v-for="(slide, i) in slides"
                  :key="i"
                  :image="slide"
                />
              </vueper-slides>
            </div>
              <ul class="mall_list">
                <li class="mall_item">
                  <img src="https://cf.shopee.vn/file/vn-50009109-b49c29f06eb25d7382ca3f13b81f303b_xhdpi" alt="">
                  <p class="mall_item_desc">Mua là có quà</p>
                </li>
                <li class="mall_item">
                  <img src="https://cf.shopee.vn/file/dec6ad9d361464deee14f9bec977d29f_xhdpi" alt="">
                  <p class="mall_item_desc">Ưu đãi ngập tràn</p>
                </li>
                <li class="mall_item">
                  <img src="https://cf.shopee.vn/file/c7b843e477e90f2a0ead5675b457f71a_xhdpi" alt="">
                  <p class="mall_item_desc">Mua là có quà</p>
                </li>
                <li class="mall_item">
                  <img src="https://cf.shopee.vn/file/be691f1a5b5a715c933e55f7fd2d7f0b_xhdpi" alt="">
                  <p class="mall_item_desc">Sale chào hè 50%</p>
                </li>
                <li class="mall_item">
                  <img src="https://cf.shopee.vn/file/4bfdc8084ac95d96ec4b5facec1228dc_xhdpi" alt="">
                  <p class="mall_item_desc">Mua là có quà</p>
                </li>
                <li class="mall_item">
                  <img src="https://cf.shopee.vn/file/0b7528892f34b1ceb5e7e3883c34adb1_xhdpi" alt="">
                  <p class="mall_item_desc">Nội y Sabina 9k</p>
                </li>
                <li class="mall_item">
                  <img src="https://cf.shopee.vn/file/6074cc75484d535e4de665bce62fe879_xhdpi" alt="">
                  <p class="mall_item_desc">Da xinh quà xịn</p>
                </li>
                <li class="mall_item">
                  <img src="https://cf.shopee.vn/file/c2091ad7aa1f207aabbab9d112f6cfa4_xhdpi" alt="">
                  <p class="mall_item_desc">Mua là có quà</p>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'other',
  data() {
    return{
      slides: [
        "https://cf.shopee.vn/file/vn-50009109-1a9489fb73dc989f488a667d8d13fdcb",
        "https://cf.shopee.vn/file/vn-50009109-367b9c19f92b029a566e03fc8818bcaa",
        "https://cf.shopee.vn/file/vn-50009109-1b5bf769231a556b85965d89ed9d04cb",
        "https://cf.shopee.vn/file/vn-50009109-3c74d14e54a971c5f617cf285d0579aa",
      ],
      categories: [
        [
          "smartphones",
          "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn"
        ],
        [
          "laptops",
          "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn"
        ],
        [
          "fragrances",
          "https://www.seekpng.com/png/detail/55-557682_perfumes-makes-jias-e-etc-perfume-bottle-vector.png"
        ],
        [
          "skincare",
          "https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn"
        ],
        ["groceries","https://toppng.com/uploads/preview/grocery-png-11553955879xwekjl7ph3.png"],
        ["home-decoration","https://w7.pngwing.com/pngs/345/732/png-transparent-vase-interior-design-services-home-decoration-television-decor-decorative.png"],
        ["furniture","https://www.ikea.com/in/en/images/products/gammalbyn-2-seat-sofa-blue__0865034_pe781333_s5.jpg?f=xxs"],
        ["tops","https://static.pullandbear.net/2/photos/2023/V/0/1/p/8246/448/015/8246448015_1_1_3.jpg?t=1675240547531"],
        ["womens-dresses","https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn"],
        ["womens-shoes", "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn"],
        ["mens-shirts","https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"],
        ["mens-shoes","https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn"],
        ["mens-watches","https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn"],
        ["womens-watches","https://www.danielwellington.com/product-images/DW00100219_Petite_Me-W_NCAVru.png"],
        ["womens-bags","https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn"],
        ["womens-jewellery","https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn"],
        ["sunglasses","https://png.pngtree.com/element_our/png/20181129/sunglasses-graphic-design-template-vector-png_248576.jpg"],
        ["automotive","https://cf.shopee.vn/file/e4fbccba5e1189d1141b9d6188af79c0_tn"],
        ["motorcycle","https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn"],
        ["lighting","https://w7.pngwing.com/pngs/854/812/png-transparent-bedside-tables-lighting-lamp-table-lamp-light-fixture-white-furniture-thumbnail.png"]
]
    }
  },
  components: { 
    VueperSlides, 
    VueperSlide 
  }
}

  
</script>
  
  
<style scoped>
.other{
  background-color: rgb(235, 242, 249);
  padding-top: 20px;
}

.category{
  background-color: var(--white-color);
}

.header{
  font-size: 16px;
  padding: 20px;
  font-weight: 300;
  color: rgb(138, 132, 132);
}

.list{
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  padding: 0;
}

.list_item{
  width: 119px;
  height: 150px;
  border: 0.5px solid rgb(245, 240, 240);
}

.list_item:hover{
  border: 0.5px solid rgb(208, 195, 195);
  cursor: pointer;
}

.item_img{
  width: 64px;
  height: 88px;
  padding-top: 20px;
}


.item_desc{
  font-size: 1.3rem;
}

.sale{
  background-color: var(--white-color);
  height: 300px;
  margin-top: 20px;
  padding: 10px 20px;
}

.sale_header{
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
}

.sale_header > img{
  height: 25px;
  width: 120px;
}

.all{
  color: var(--primary-color);
  font-size: 1.4rem;
}

.banner{
  display: grid;
  grid-template-columns: 393px 393px 393px; 
  margin-top: 20px;
  gap: 10px;
}

.banner_img{
  width: 100%;
  border-radius: 15px;
}

.mall{
  margin-top: 20px;
  background-color: var(--white-color);
}

.mall_header{
  height: 61px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  text-align: center;
}

.mall_container{
  display: grid;
  grid-template-columns: 32.5% 67.5%;
}

.header_item{
  display: flex;
}


.mall_logo{
  margin-right: 20px;
  font-size: 14px;
  color: #d0011b;
  border-right: 1px solid rgb(184, 174, 174);
  padding-right: 20px;
}

.icon{
  color: #d0011b;
  font-size: 12px;
}

.mall_more{
  padding-right: 20px;
  font-size: 14px;
}

.header_more{
  color: var(--primary-color);
  font-size: 1.4rem;
}

.mall_list{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  align-items: center;
}
.mall_item{
  position: relative;
  text-align: center;
  height: 216px;
  width: 200px;
  cursor: pointer;
}

.mall_item>img{
  height: 200px;
}

.mall_item_desc{
  font-size: 16px;
  color: #d0011b;
  margin: 0;
  position: absolute;
  left: 14px;
  bottom: 18px;
  right: 10px;
}

.menu_list{
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  padding-top: 10px;
}
.menu_list_item{
  background-color: var(--white-color);
  text-align: center;
  margin-bottom: 10px;
  position: relative;
}

.menu_list_item>img{
  width: 190px;
}

.product_desc{
  padding:  5px;
  font-size: 16px;
  color: #c2b9b7;
}

.product_price{
  color: #ee4d2d;
  font-weight: 600;
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

.product_sold{
  background-color: #f3c1b7;
  position: relative;
  margin: 0 10px;
  border-radius: 20px;
  color: var(--white-color);
  font-size: 13px;
}

.product_sold::after{
  content: "";
  position: absolute;
  background-color: #d0011b;
  left: 0;
  width: 40px;
  height: 16px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.category{
  text-decoration: none;
  color: var(--black-color);
}

</style>
  
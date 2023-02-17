<template>
    <div class="slide">
      <div class="grid">
        <div class="banner">
          <div class="main_banner">
            <vueper-slides autoplay :touchable="false" no-shadow>
              <vueper-slide
                v-for="(slide, i) in slides"
                :key="i"
                :image="slide"
              />
            </vueper-slides>
          </div>
                
          <div class="other_banner">
            <img src="../assets/slide/img1.jpg" alt="">
            <img src="../assets/slide/img2.png" alt="">
          </div>          
        </div>
        <div class="list">
          <div class="list_item">
            <img class="item_img" src="../assets/slide/slide_item1.png" alt="">
            <p class="item_desc">Gì Cũng Rẻ - Mua Là Freeship</p>
          </div>
          <div class="list_item">
            <img class="item_img" src="../assets/slide/slide_item2.png" alt="">
            <p class="item_desc">Mã Giảm Giá</p>
          </div>
          <div class="list_item">
            <img class="item_img" src="../assets/slide/slide_item3.png" alt="">
            <p class="item_desc">Miễn Phí Vận Chuyển</p>
          </div>
          <div class="list_item">
            <img class="item_img" src="../assets/slide/slide_item4.png" alt="">
            <p class="item_desc">Bắt Trend - Giá Sốc </p>
          </div>
          <div class="list_item">
            <img class="item_img" src="../assets/slide/slide_item5.png" alt="">
            <p class="item_desc">Hoàn Xu Xtra Từ 100K</p>
          </div>
          <div class="list_item">
            <img class="item_img" src="../assets/slide/slide_item6.png" alt="">
            <p class="item_desc">Hàng Hiệu Giá Tốt</p>
          </div>
          <div class="list_item">
            <img class="item_img" src="../assets/slide/slide_item7.png" alt="">
            <p class="item_desc">Hàng Quốc Tế</p>
          </div>
          <div class="list_item">
            <img class="item_img" src="../assets/slide/slide_item8.png" alt="">
            <p class="item_desc">Chia Kho Xu 30 Triệu</p>
          </div>
          <div class="list_item">
            <img class="item_img" src="../assets/slide/slide_item9.png" alt="">
            <p class="item_desc">Nạp Điện Thoại & Thẻ Game</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'slide',
  data() {
    return{
      slides: [
        "https://cf.shopee.vn/file/fa79715264f5c973648d8096a8aa9773_xxhdpi",
        "https://cf.shopee.vn/file/vn-50009109-ddb4ae3d809be7557ece4cc7c97b8e9a_xxhdpi",
        "https://cf.shopee.vn/file/vn-50009109-b1a18846e5bd31369043012ba9eed7e8_xxhdpi",
        "https://cf.shopee.vn/file/vn-50009109-e4d853aa0308dadf26264d525c9f08ea_xxhdpi",
      ],
    }
  },
  components: { 
    VueperSlides, 
    VueperSlide 
  }
}

  
</script>
  
  
<style scoped>
  .slide{
    padding-top: 150px;
    background-color: var(--white-color);
    border-bottom: 1px solid rgb(201, 203, 222);
  }

  .banner{
    display: grid;
    grid-template-columns: 64% 34.8%;
    gap: 0.7%;
  }

  img{
    width: 100%;
    border-radius: 2px;
  }

  .vueperslide{
    border-radius: 2px;
  }

  .list{
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }

  .list_item{
    width: 100px;
    height: 108px;
    text-align: center;
  }

  .list_item:hover{
    cursor: pointer;
    transform:  translateY(-2px);
  }

  .item_img{
    width: 45px;
    height: 45px;
  }

  .item_desc{
    font-size: 13px;
    margin: 0;
    font-weight: 100;
  }



</style>
  
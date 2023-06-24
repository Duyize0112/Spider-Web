<template>
  <div>Carousel</div>
  <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px"> 
        <right-circle-outlined />
      </div>
    </template>
    
    <div><h3><img src="/image/2.jpg"></h3></div>
    <div><h3><img src="/image/3.jpg"></h3></div>
    <div><h3><img src="/image/R.jpg"></h3></div>
  </a-carousel>
</template>

<script>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 400px;
  line-height: 160px;
  background: #f8f6d0;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: #00117d;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}
img{
  width: 700px;
  height: 400px;
}
.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
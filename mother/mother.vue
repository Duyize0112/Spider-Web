<script setup>
import CountDown from 'vue-countdown'
import Swiper from 'vue-awesome-swiper'
const end = '2024-05-14 00:00:00'
const images = ['../image/2.jpg', '../image/3.jpg', '../image/R.jpg']

const swiperOptions = {
  loop: true,
  autoplay: { delay: 3000 },
  pagination: { el: '.swiper-pagination' }
}
</script>

<template>
  <div class="countdown">
    <h>据母亲节还有：</h>
    <CountDown :date="end" v-if="remainingTime > 0">
      <div class="countdown__item">{{ days }} 天</div>
      <div class="countdown__item">{{ hours }} 小时</div>
      <div class="countdown__item">{{ minutes }} 分钟</div>
      <div class="countdown__item">{{ seconds }} 秒</div>
    </CountDown>
  </div>

  <div class="swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="image in images" :key="image">
        <img :src="image" alt="">
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
}
.countdown__item {
  padding: 10px;
  margin: 0 10px;
  background-color: #333;
  color: #fff;
}

.swiper {
  height: 300px;
}
.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

</style>
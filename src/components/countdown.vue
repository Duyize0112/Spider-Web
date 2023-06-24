<template>
<div class="countdown">
<div class="title">距下次母亲节还有</div>
<div class="time">
    <p>{{ days }} 天{{ hours }} 小时{{ minutes }} 分 {{ seconds }} 秒</p>
  </div>
</div>
</template>
  <script>

  import VueCountdown from '@chenfengyuan/vue-countdown';
  export default {
    components: {
      VueCountdown,
    },
    data() {
      return {
        targetDate: '2024/05/12 00:00:00', // 母亲节的日期
      };
    },
    computed: {
      timeRemaining() {
        const timeDiff = Date.parse(this.targetDate) - Date.parse(new Date());
        const seconds = Math.floor((timeDiff / 1000) % 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const hours = Math.floor((timeDiff / 1000 / 60 / 60) % 24);
        const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
        return {
          seconds,
          minutes,
          hours,
          days,
        };
      },
    },
  };
</script>
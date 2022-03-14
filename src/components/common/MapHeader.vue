<template>
  <div>
    <transition>
      <div>
        <div class="header">
          전국 누적 확진자 수
          <span class="red">{{ this.$store.state.decidePatient }}</span> 명
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
.header {
  text-align: left;
  font-size: 2.5rem;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  padding: 3vh 0;
  color: rgb(54, 79, 107);
  margin-left: -9vh;
}
.red {
  color: rgb(219, 45, 67);
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 3.5s ease;
}
</style>

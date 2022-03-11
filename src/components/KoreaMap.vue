<template>
  <!-- 전국 지도에 버튼까지 -->
  <!-- 지도위에 전국 누적 확진자수(vuex로 하면 된다.) -->
  <div>
    <!-- Header -->
    <!-- <div><NumHeader></NumHeader></div> -->
    <!-- body -->
    <div><DrawMap></DrawMap></div>
    <!-- footer -->
  </div>
</template>

<script>
// import NumHeader from '../components/common/NumHeader.vue';
import DrawMap from '../components/common/DrawMap.vue';

export default {
  components: {
    // NumHeader,
    DrawMap,
  },
};
</script>

<style></style>

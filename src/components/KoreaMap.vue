<template>
  <!-- 전국 지도에 버튼까지 -->
  <!-- 지도위에 전국 누적 확진자수(vuex로 하면 된다.) -->
  <div>
    <!-- Header -->
    <div><NumBar></NumBar></div>
    <!-- body -->
    <div>
      <DrawMap></DrawMap>
    </div>
    <!-- footer -->
  </div>
</template>

<script>
import NumBar from './common/NumBar.vue';
import DrawMap from './common/DrawMap.vue';
// import MapButton from './MapButton.vue';

export default {
  components: {
    NumBar,
    DrawMap,
    // MapButton,
  },
};
</script>

<style></style>

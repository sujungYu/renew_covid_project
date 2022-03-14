<template>
  <div>
    <h2>
      <i class="fa-solid fa-calendar-check"></i>&nbsp; TODAY is{{
        $moment().format(' YYYY. MM. DD')
      }}
    </h2>
    <h1><span class="blue">corona</span> DATA</h1>
    <router-view></router-view>
  </div>
</template>

<script>
// import NumHeader from '../src/components/common/NumHeader.vue';
// import DrawMap from '../src/components/common/DrawMap.vue';
export default {
  components: {
    // NumHeader,
    // DrawMap,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
div {
  text-align: center;
  margin: 0;
}
h1 {
  margin: 0 auto;
  padding: 3vh 0;
  font-family: 'Ubuntu', sans-serif;
  color: rgb(54, 79, 107);
  font-size: 9rem;
  border-top: 3px solid rgb(54, 79, 107);
  border-bottom: 3px solid rgb(54, 79, 107);
  background-color: white;
}
h2 {
  color: rgb(54, 79, 107);
  font-size: 2rem;
}
.blue {
  color: rgb(63, 193, 201);
}
</style>

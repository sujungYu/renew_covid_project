<template>
  <div>
    <h1><span class="red">corona</span> DATA</h1>
    <h2>{{ $moment().format(' YYYY. MM. DD.') }}</h2>

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

<style></style>

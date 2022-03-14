<template>
  <div>
    <div class="map-wrapper">
      <MapHeader></MapHeader>
      <MapButton></MapButton>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import * as topojson from 'topojson';
import MapHeader from './MapHeader.vue';
import MapButton from './MapButton.vue';
export default {
  components: {
    MapHeader,
    MapButton,
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw() {
      const localName = this.$route.params.id;
      const koreaMap = require(`../../assets/${localName}.json`);
      const geojson = topojson.feature(
        koreaMap,
        koreaMap.objects.skorea_provinces_2018_geo,
      );
      // console.log(geojson);
      // const center = d3.geoCentroid(geojson);
      const width = 650;
      const height = 800;
      const svg = d3
        .select('.map-wrapper')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
      const projection = d3
        .geoMercator()
        .scale(1)
        .translate([0, 0]);
      const path = d3.geoPath().projection(projection);
      const bounds = path.bounds(geojson);
      const widthScale = (bounds[1][0] - bounds[0][0]) / width;
      const heightScale = (bounds[1][1] - bounds[0][1]) / height;
      const scale = 1 / Math.max(widthScale, heightScale);
      const xoffset =
        width / 2 - (scale * (bounds[1][0] + bounds[0][0])) / 2 + 10;
      const yoffset =
        height / 3 - (scale * (bounds[1][1] + bounds[0][1])) / 2 + 80;
      const offset = [xoffset, yoffset];
      projection.scale(scale).translate(offset);
      svg
        .append('g')
        .selectAll('path')
        .data(geojson.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', 'rgb(219, 45, 67)');
      // .attr('transform', d3.event.transform)
    },
  },
};
</script>

<style>
.map-wrapper {
  margin: 0 auto;
  width: 50vw;
  height: 110vh;
  margin: 0 auto;
  border: 3px solid rgb(54, 79, 107);
  border-radius: 10px;
  padding: 1vh 10vw;
  position: relative;
}
</style>

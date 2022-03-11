<template>
  <div>
    <transition-group>
      <div v-for="(item, idx) in numBar" :key="idx + 0">
        <div>
          <div>{{ item.title }}</div>
          <div>{{ item.total }}</div>
          <div>{{ item.today }}</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      numBar: this.$store.state.patientList,
    };
  },
  computed: {
    ...mapState(['incNum', 'decidePatient', 'deathPatient', 'flowNum']),
  },
  created() {
    //여기에 gubun이 합계, 제주, 이렇게되도록
    const localName = this.$route.params.id;
    console.log(localName);
    this.$store.dispatch('curPatient', localName);
  },
};
</script>

<style></style>

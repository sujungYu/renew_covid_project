<template>
  <div>
    <transition-group class="overview-wrapper" name="slide-up" appear>
      <div v-for="(item, idx) in display" :key="idx + 0">
        <div :class="{ [item.color]: true }">
          <div class="title">{{ item.title }}</div>
          <div class="total">{{ item.total }}</div>
          <template v-if="item.total">
            <div class="today">
              <i class="fa-regular fa-circle-up"></i>&nbsp;{{ item.today }}
            </div>
          </template>
          <template v-else>
            <div class="total">
              <i class="fa-regular fa-circle-up"></i>&nbsp;{{ item.today }}
            </div>
          </template>
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
      numBar: '',
      display: [],
      // numBar: this.$store.state.patientList,
    };
  },
  computed: {
    ...mapState([
      'incNum',
      'deathNum',
      'decidePatient',
      'deathPatient',
      'flowNum',
    ]),
  },
  async created() {
    //여기에 gubun이 합계, 제주, 이렇게되도록
    const localName = this.$route.params.id;
    await this.$store.dispatch('curPatient', localName);
    this.numBar = await this.incNum;

    const cases = {
      color: 'red',
      background: 'red',
      title: '확진자',
      total: this.decidePatient,
      today: this.incNum,
    };
    const deaths = {
      color: 'purple',
      background: 'red',
      title: '사망자',
      total: this.deathPatient,
      today: this.deathNum,
    };
    const exam = {
      color: 'orange',
      background: 'red',
      title: '해외 유입',
      // total: this.totalexamCnt[0],
      today: this.flowNum,
    };

    this.display = [cases, deaths, exam];
  },
  // methods: {
  //   async getList() {
  //     const get = await
  //   }
  // }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
.overview-wrapper {
  margin: 4vh auto;
  padding: 1vh 10vw;
  display: flex;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
  width: 50vw;
  height: 17vh;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid rgb(54, 79, 107);
  border-radius: 5px;
  background: white;
}
.red {
  color: rgb(219, 45, 67);
}
.orange {
  color: rgb(231, 104, 56);
}
.purple {
  color: rgb(168, 2, 111);
}
.title {
  margin: 1vh 0;
  font-weight: bolder;
  font-size: 2.5rem;
}
.total {
  margin-bottom: 1vh;
  font-size: 3rem;
}
.today {
  font-size: 1.8rem;
  font-weight: bolder;
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

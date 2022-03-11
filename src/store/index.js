import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    patientList: null,
  },
  getters: {},
  mutations: {
    addPatient(state, payload) {
      const cases = {
        color: 'red',
        background: 'red',
        title: '확진자',
        total: payload.defCnt,
        today: payload.incDec,
      };
      const deaths = {
        color: 'purple',
        background: 'red',
        title: '사망자',
        total: payload.deathCnt,
      };
      const flow = {
        color: 'orange',
        background: 'red',
        title: '해외 유입',
        today: payload.overFlowCnt,
      };
      state.patientList = [cases, deaths, flow];
      // console.log(payload);
      // state.incNum = payload.incDec; // 오늘 확진자
      // state.decidePatient = payload.defCnt; // 누적 확진자
      // state.deathPatient = payload.deathCnt; // 누적 사망자
      // state.flowNum = payload.overFlowCnt; // 오늘 해외 유입수
    },
  },
  actions: {
    curPatient({ commit }, payload) {
      console.log(payload);
      const startDate = Vue.moment()
        .subtract(1, '_d')
        .format('YYYYMMDD');
      const endDate = Vue.moment().format('YYYYMMDD');

      const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=SGsOrRFvsbOZ6Oa2wrwdLE9yTZeH%2FFNwx9nlqc2jYcC6d1cN7%2FLg4gpfcipuXnxVCVDSdrxgjw8kNv7pvEfNaw%3D%3D&pageNo=1&numOfRows=10&startCreateDt=${startDate}&endCreateDt=${endDate}`;

      // eslint-disable-next-line prettier/prettier
      axios.get(url).then(res => {
          const data = res.data.response.body.items.item;
          console.log(data);
          const newData = data.filter(e => {
            return e.gubunEn == payload;
          });
          console.log(newData[0]);
          commit('addPatient', newData[0]);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    patientList: null,
    incNum: '',
    deathNum: '',
    decidePatient: '',
    deathPatient: '',
    flowNum: '',
    localIncNum: [],
    localName: [],
  },
  getters: {},
  mutations: {
    addPatient(state, payload) {
      state.incNum = payload[0].incDec; // 오늘 확진자
      state.decidePatient = payload[0].defCnt; // 누적 확진자
      state.deathNum = payload[0].deathCnt - payload[1].deathCnt; //오늘 확진자
      state.deathPatient = payload[0].deathCnt; // 누적 사망자
      state.flowNum = payload[0].overFlowCnt; // 오늘 해외 유입수
    },
    addButton(state, payload) {
      payload.forEach(d => {
        state.localIncNum.push(d.incDec);
        state.localName.push(d.gubun);
      });
    },
  },
  actions: {
    async curPatient({ commit }, payload) {
      const startDate = Vue.moment()
        .subtract(1, 'days')
        .format('YYYYMMDD');
      const endDate = Vue.moment().format('YYYYMMDD');

      const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=SGsOrRFvsbOZ6Oa2wrwdLE9yTZeH%2FFNwx9nlqc2jYcC6d1cN7%2FLg4gpfcipuXnxVCVDSdrxgjw8kNv7pvEfNaw%3D%3D&pageNo=1&numOfRows=10&startCreateDt=${startDate}&endCreateDt=${endDate}`;

      // eslint-disable-next-line prettier/prettier
      await axios.get(url).then(res => {
          const data = res.data.response.body.items.item;

          if (payload) {
            const newData = data.filter(e => {
              return e.gubunEn == payload;
            });

            commit('addPatient', newData);
            return newData;
          } else {
            const today = Vue.moment().format('YYYY년 MM월 DD일 00시');
            const newData = data.filter(e => {
              return e.stdDay == today;
            });

            commit('addButton', newData);
            return newData;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
});

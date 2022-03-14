<template>
  <div>
    <button @click="jeju" class="Jeju">
      {{ this.localName[1]
      }}<span class="red"><br />{{ this.localIncNum[1] }}</span>
    </button>
    <button @click="gyeongnam" class="Gyeongnam">
      {{ this.localName[2]
      }}<span class="red"><br />{{ this.localIncNum[2] }}</span>
    </button>
    <button @click="gyeongbuk" class="Gyeongbuk">
      {{ this.localName[3]
      }}<span class="red"><br />{{ this.localIncNum[3] }}</span>
    </button>
    <button @click="jeoanam" class="Jeoanam">
      {{ this.localName[4]
      }}<span class="red"><br />{{ this.localIncNum[4] }}</span>
    </button>
    <button @click="jeoanbuk" class="Jeoanbuk">
      {{ this.localName[5]
      }}<span class="red"><br />{{ this.localIncNum[5] }}</span>
    </button>
    <button @click="chungnam" class="Chungnam">
      {{ this.localName[6]
      }}<span class="red"><br />{{ this.localIncNum[6] }}</span>
    </button>
    <button @click="chungbuk" class="Chungbuk">
      {{ this.localName[7]
      }}<span class="red"><br />{{ this.localIncNum[7] }}</span>
    </button>
    <button @click="gangwon" class="Gangwon">
      {{ this.localName[8]
      }}<span class="red"><br />{{ this.localIncNum[8] }}</span>
    </button>
    <button @click="gyeonggi" class="Gyeonggi">
      {{ this.localName[9]
      }}<span class="red"><br />{{ this.localIncNum[9] }}</span>
    </button>
    <button @click="sejong" class="Sejong">
      {{ this.localName[10]
      }}<span class="red"><br />{{ this.localIncNum[10] }}</span>
    </button>
    <button @click="ulsan" class="Ulsan">
      {{ this.localName[11]
      }}<span class="red"><br />{{ this.localIncNum[11] }}</span>
    </button>
    <button @click="daejeon" class="Daejeon">
      {{ this.localName[12]
      }}<span class="red"><br />{{ this.localIncNum[12] }}</span>
    </button>
    <button @click="gwangju" class="Gwangju ">
      {{ this.localName[13]
      }}<span class="red"><br />{{ this.localIncNum[13] }}</span>
    </button>
    <button @click="incheon" class="Incheon ">
      {{ this.localName[14]
      }}<span class="red"><br />{{ this.localIncNum[14] }}</span>
    </button>
    <button @click="daegu" class="Daegu">
      {{ this.localName[15]
      }}<span class="red"><br />{{ this.localIncNum[15] }}</span>
    </button>
    <button @click="busan" class="Busan">
      {{ this.localName[16]
      }}<span class="red"><br />{{ this.localIncNum[16] }}</span>
    </button>
    <button @click="seoul" class="Seoul">
      {{ this.localName[17]
      }}<span class="red"><br />{{ this.localIncNum[17] }}</span>
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['localIncNum', 'localName']),
  },
  async created() {
    await this.$store.dispatch('curPatient');
    console.log(this.localIncNum);
    console.log(this.localName);
  },
  methods: {
    jeju() {
      this.$router.push('Jeju');
    },
    gyeongnam() {
      this.$router.push('Gyeongnam');
    },
    gyeongbuk() {
      this.$router.push('Gyeongbuk');
    },
    jeoanam() {
      this.$router.push('Jeoanam');
    },
    jeoanbuk() {
      this.$router.push('Jeoanbuk');
    },
    chungnam() {
      this.$router.push('Chungnam');
    },
    chungbuk() {
      this.$router.push('Chungbuk');
    },
    gangwon() {
      this.$router.push('Gangwon');
    },
    gyeonggi() {
      this.$router.push('Gyeonggi');
    },
    sejong() {
      this.$router.push('Sejong');
    },
    ulsan() {
      this.$router.push('Ulsan');
    },
    daejeon() {
      this.$router.push('Daejeon');
    },
    gwangju() {
      this.$router.push('Gwangju');
    },
    incheon() {
      this.$router.push('Incheon');
    },
    daegu() {
      this.$router.push('Daegu');
    },
    busan() {
      this.$router.push('Busan');
    },
    seoul() {
      this.$router.push('Seoul');
    },
  },
};
</script>

<style scoped>
div {
  margin: auto 0;
  text-align: center;
}
/* .button {
  font-family: 'Gothic A1', sans-serif;
  font-size: 15px;
  font-weight: bolder;
  width: 45px;
  border: 1px solid rgba(216, 215, 215, 0.596);
  border-radius: 5px;
  box-shadow: 1px 1px rgba(170, 170, 170, 0.541);
  background: white;
  justify-content: center;
  position: absolute;
  transition: background 0.25s ease-in;
}
.button:hover {
  border: none;
  box-shadow: none;
  background: rgba(59, 56, 56, 0.89);
  color: white;
  transition: background 0.35s ease-out;
} */
button {
  position: absolute;
  justify-content: center;
}
.Jeju {
  top: 665px;
  left: 290px;
}
.Gyeongnam {
  top: 500px;
  left: 425px;
}
.Gyeongbuk {
  top: 330px;
  left: 500px;
}
.Jeoanam {
  top: 550px;
  left: 255px;
}
.Jeoanbuk {
  top: 440px;
  left: 280px;
}
.Chungnam {
  top: 340px;
  left: 260px;
}
.Chungbuk {
  top: 320px;
  left: 420px;
}
.Gangwon {
  top: 200px;
  left: 440px;
}
.Gyeonggi {
  top: 150px;
  left: 330px;
}
.Sejong {
  top: 320px;
  left: 350px;
}
.Ulsan {
  top: 430px;
  left: 530px;
}
.Daejeon {
  top: 400px;
  left: 360px;
}
.Gwangju {
  top: 500px;
  left: 340px;
}
.Incheon {
  top: 200px;
  left: 260px;
}
.Daegu {
  top: 400px;
  left: 450px;
}
.Busan {
  top: 510px;
  left: 530px;
}
.Seoul {
  top: 230px;
  left: 350px;
}
</style>

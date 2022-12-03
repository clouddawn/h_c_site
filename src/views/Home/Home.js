import qs from "qs";
import {Dialog, Toast} from "vant";
import dayjs from "dayjs";

export default {
  data() {
    return {
      nowTime: "",
      hesuanTime: "",
      resultTime: ""
    };
  },
  mounted() {
    // const a = window.prompt("请输入日期");
    // console.log(a);
    setInterval(() => {
      this.nowTime = dayjs().format("MM-DD HH:mm:ss");
    }, 200);
    this.resultTime = this.hesuanTime = dayjs().add(-1, "day").format("MM月D日");
  },
  methods: {
    getHesuanTime() {
      this.hesuanTime = window.prompt();
    },
    getResultTime(){
      this.resultTime = window.prompt();
    }
  }
};
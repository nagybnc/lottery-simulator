import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      isRunning: false,
      isRandomPlay: true,
      speed: 1000,
    };
  },
  mutations: {
    toggleGame(state) {
      state.isRunning = !state.isRunning;
    },
  },
  getters: {
    getStartStopText(state) {
      return state.isRunning ? "stop" : "start";
    },
  },
});

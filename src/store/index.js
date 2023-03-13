import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      ticketNumber: 0,
      date: new Date(0),
      matches: {
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
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
    getNumberOfTickets(state) {
      return state.ticketNumber.toLocaleString("fr-FR");
    },
    getNumberOfYears(state) {
      return state.date.getFullYear() - 1970;
    },
    getCostOfTickets(state) {
      return new Intl.NumberFormat("hu-HU", {
        style: "currency",
        currency: "HUF",
      }).format(state.ticketNumber * 300);
    },
    hasFiveMatches(state) {
      return state.matches[5] > 0;
    },
    getStartStopText(state) {
      return state.isRunning ? "stop" : "start";
    },
  },
});

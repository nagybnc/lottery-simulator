import { createStore } from "vuex";
import { countCommonNumbers, generateRandomNumbers } from "../utils";

export default createStore({
  state() {
    return {
      ticketNumber: 0,
      date: new Date(0),
      winningNumbers: [1, 9, 34, 68, 90],
      yourNumbers: [2, 7, 32, 44, 87],
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
    setYourNumbers(state, newNumber) {
      if (
        newNumber.number >= 1 &&
        newNumber.number <= 90 &&
        !state.yourNumbers.includes(newNumber.number)
      ) {
        state.yourNumbers[newNumber.index] = newNumber.number;
      }
    },
    draw(state) {
      const newWinningNumbers = generateRandomNumbers();
      const newyourNumbers = state.isRandomPlay
        ? generateRandomNumbers()
        : state.yourNumbers;
      const newMatch = countCommonNumbers(newWinningNumbers, newyourNumbers);
      const newDate = new Date(state.date);
      newDate.setDate(newDate.getDate() + 7);

      if (newMatch === 5) {
        state.isRunning = false;
      }

      if (newMatch >= 2) {
        const newMatches = {
          ...state.matches,
          [newMatch]: state.matches[newMatch] + 1,
        };
        state.matches = newMatches;
      }
      state.date = newDate;
      state.ticketNumber = state.ticketNumber + 1;
      state.winningNumbers = newWinningNumbers;
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
    getIsRunning(state) {
      return state.isRunning;
    },
    getSpeed(state) {
      return state.speed;
    },
  },
});

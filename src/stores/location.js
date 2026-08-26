import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "#constants";

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    history: [],

    setActiveLocation: (location = null) =>
      set((state) => {
        if (state.activeLocation && location?.kind === "folder") {
          state.history.push(state.activeLocation);
        }

        state.activeLocation = location;
      }),

    goBack: () =>
      set((state) => {
        const previousLocation = state.history.pop();

        if (previousLocation) {
          state.activeLocation = previousLocation;
        }
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
        state.history = [];
      }),
  }))
);

export default useLocationStore;
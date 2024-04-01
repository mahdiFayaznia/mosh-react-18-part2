import { create } from "zustand";

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

// set --> update state of store
// set => ({}) --> return an object
const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })), // property merge to other properties  -->  no need ...spread
  // reset: () => set((store) => ({ counter: 0 })), // property merge to other properties  -->  no need ...spread
  reset: () => set(() => ({ counter: 0 })), // property merge to other properties  -->  no need ...spread
}));

export default useCounterStore;

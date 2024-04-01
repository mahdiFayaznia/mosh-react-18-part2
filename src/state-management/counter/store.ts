import { create } from "zustand";

interface CounterStore {
  counter1: number;
  increment1: () => void;
  reset1: () => void;

  counter2: number;
  increment2: () => void;
  reset2: () => void;
}

// set  -->  a function for update state of store  -->  set((currentState) => (nextState))
// set => ({})  -->  return an object of initial state of store
const useCounterStore = create<CounterStore>((set) => ({
  counter1: 0,
  increment1: () => set((store1) => ({ counter1: store1.counter1 + 1 })), // property merge to other properties  -->  no need ...spread
  reset1: () => set(() => ({ counter1: 0 })), // property merge to other properties  -->  no need ...spread

  counter2: 0,
  increment2: () => set((store2) => ({ counter2: store2.counter2 + 1 })), // property merge to other properties  -->  no need ...spread
  reset2: () => set(() => ({ counter2: 0 })), // property merge to other properties  -->  no need ...spread
}));

export default useCounterStore;

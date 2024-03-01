"use client";

import styles from "./styles.module.scss";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, decrement } from "@/store/features/counterSlice";

const Counter = () => {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Subir
      </button>
      <h2>Total: {count} </h2>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Bajar
      </button>
    </div>
  );
};

export default Counter;

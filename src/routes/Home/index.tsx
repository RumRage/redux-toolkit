"use client";

import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { increment, decrement } from "@/store/slices/counterSlice";

function Home() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.main}>
      <div>
        <h1>Total: {count} </h1>

        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Subir
        </button>

        <br />

        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Bajar
        </button>
      </div>
    </div>
  );
}

export default Home;

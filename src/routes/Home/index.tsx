"use client";

import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { increment, decrement } from "@/store/slices/counterSlice";
import { useGetPostsQuery } from "@/services/postApi";

function Home() {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const { data, error, isLoading, isFetching } = useGetPostsQuery(null);

  if (isLoading || isFetching) return <p>Cargando...</p>;
  if (error) return <p>Ups... Parece que hubo un error</p>;

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

        {data?.map((post) => (
          <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

"use client";

import styles from "./styles.module.scss";
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
      <h1>Manejo Global de Redux Toolkit</h1>
      <div className={styles.buttons_section}>
        <h2>Total: {count} </h2>

        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Subir
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Bajar
        </button>
      </div>
      <h1>Conexión con Posts de Json Placeholder</h1>

      <div className={styles.posts_container}>
        {data?.map((post) => (
          <div className={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

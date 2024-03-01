"use client";

import styles from "./styles.module.scss";

import { useGetPostsQuery } from "@/services/postApi";

const Posts = () => {
  const { data, error, isLoading, isFetching } = useGetPostsQuery(null);
  if (isLoading || isFetching) return <p>Cargando...</p>;
  if (error) return <p>Ups... Parece que hubo un error</p>;
  return (
    <div className={styles.container}>
      {" "}
      <h1>Conexión con Posts de Json Placeholder</h1>
      <div className={styles.posts_container}>
        {data?.map((post, index) => (
          <div className={styles.post} key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;

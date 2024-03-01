"use client";

import User from "@/components/User";
import { get } from "@/services/fetch";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { userState, setUserData } from "@/store/features/userSlice";

const Users = () => {
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();
  const userData = useAppSelector(userState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const usersData = await get("users");
      dispatch(setUserData(usersData));
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      setError(true);
    }
  };
  return (
    <div>
      <User title="Conexión con USERS de Json Placeholder" data={userData} />
    </div>
  );
};

export default Users;

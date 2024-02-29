import styles from "./styles.module.scss";
import { UserDataProps } from "@/typescript/interfaces/user.interface";

interface DataProps {
  title: string;
  data: UserDataProps;
}

const User = ({ title, data }: DataProps) => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{title}</h1>;
      <div className={styles.container}>
        {data ? (
          Object.values(data).map((item, index) => (
            <div key={index} className={styles.data_container}>
              <div className={styles.column}>
                <h2>Usuario</h2>
                <p className={styles.entered_data}>Nombre: {item.name}</p>
                <p className={styles.entered_data}>Usuario: {item.username}</p>
                <p className={styles.entered_data}>Email: {item.email}</p>
                <p className={styles.entered_data}>Teléfono: {item.phone}</p>
                <p className={styles.entered_data}>Sitio Web: {item.website}</p>
              </div>
              <div className={styles.column}>
                <h3>Dirección</h3>
                {item.address ? (
                  <>
                    <p className={styles.entered_data}>
                      Calle: {item.address.street}
                    </p>
                    <p className={styles.entered_data}>
                      Suite: {item.address.suite}
                    </p>
                    <p className={styles.entered_data}>
                      City: {item.address.city}
                    </p>
                    <p className={styles.entered_data}>
                      Zipcode: {item.address.zipcode}
                    </p>
                  </>
                ) : (
                  <p className={styles.entered_data}>Dirección no disponible</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className={styles.empty}>No hay usuarios...</p>
        )}
      </div>
    </div>
  );
};

export default User;

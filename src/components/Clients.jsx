import { clients } from "../constants/constants";
import styles from "../style";

function Clients() {
  return (
    <section
      className={`${styles.flexCenter}  my-4 flex flex-wrap justify-evenly`}
    >
      {clients.map((client) => (
        <img
          className={`w-[100px] sm:w-[192px] object-contain`}
          id={client.id}
          src={client.logo}
          alt={client.id}
        />
      ))}
    </section>
  );
}

export default Clients;

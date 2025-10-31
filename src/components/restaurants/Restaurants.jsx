import styles from "./Restaurants.module.css";
import RestaurantNavigationContainer from "../restaurantNavigation/RestaurantNavigationContainer";
import RestaurantViewContainer from "../restaurantView/RestaurantViewContainer";

export default function Restaurants() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ресторанчики</h2>
      <RestaurantNavigationContainer />
      <RestaurantViewContainer />
    </section>
  );
}

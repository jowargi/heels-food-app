import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import ThemeColorToggle from "../themeColorToggle/ThemeColorToggle";
import styles from "./Header.module.css";
import classNames from "classnames";

export default function Header() {
  const {ThemeColor} = useThemeColorContext();
  return (
    <header className={classNames(styles.header, styles[`header--${ThemeColor}`] 
    )}>
      <h1
        onPointerDown={(event) => event.preventDefault()}
        className={styles.title}
      >
        ЖРАКА
      </h1>
      <div className={styles.container}>
        <ThemeColorToggle />
      </div>
    </header>
  );
}

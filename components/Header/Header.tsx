import cn from "classnames";
import { useState, useCallback } from "react";
import Icon from "components/Icon";
import Link from "components/Link";
import Logo from "components/Logo";
import Menu from "components/Menu";
import HeadlessButton from "components/HeadlessButton";
import blockBodyScroll from "utils/block-body-scroll";
import HeaderCTA from "./HeaderCTA";
import styles from "./Header.module.css";

const Header = () => {
  const [isNavigationVisible, setIsNavigationVisible] =
    useState<boolean>(false);
  const toggleNavigaton = useCallback(() => {
    setIsNavigationVisible((value) => !value);
    blockBodyScroll(isNavigationVisible);
  }, [isNavigationVisible]);

  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles["logo-link"]}>
        <Logo />
      </Link>
      <HeadlessButton onClick={toggleNavigaton} className={styles.hamburger}>
        <Icon name={isNavigationVisible ? "close" : "hamburger"} size="md" />
      </HeadlessButton>
      <div
        className={cn(styles.content, {
          [styles.visible]: isNavigationVisible,
        })}
      >
        <Menu />
        <HeaderCTA />
      </div>
    </header>
  );
};

export default Header;

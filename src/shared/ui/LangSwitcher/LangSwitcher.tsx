import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import i18n from "shared/config/i18n/i18n";
import Button, { ThemeButton } from "../Button/Button";

interface LangSwitcherProps {
  className?: string;
}

const toggle = () => {
  i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
};

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}
    </Button>
  );
};
export default LangSwitcher;

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return;
  <button onClick={toggleTheme}>TOGGLE</button>;
};
export default ThemeSwitcher;

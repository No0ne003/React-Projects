import { Button } from "@/components/ui/button";
import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {

  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex flex-col gap-3 flex-1 justify-center items-start data-[theme='dark']:bg-black data-[theme='light']:bg-white" data-theme={theme}>
      <div className="container space-y-8">
        <p className="data-[theme='dark']:text-white data-[theme='light']:text-black text-4xl" data-theme={theme}>Hello World !</p>
        <Button className="data-[theme='dark']:bg-white data-[theme='dark']:text-black data-[theme='light']:bg-black data-[theme='light']:text-white ml-2" data-theme={theme} onClick={handleToggleTheme}>Change Theme</Button>
      </div>
    </div>
  );
}

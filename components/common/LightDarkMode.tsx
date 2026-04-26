"use client";
import { Moon, Sun } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useTheme } from "next-themes";

const LightDarkMode = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();

  return (
    <ToggleGroup
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
      variant="outline"
      type="single"
      value={theme}
    >
      <ToggleGroupItem value="light" aria-label="light">
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-100 dark:-rotate-90" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="dark">
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-100 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default LightDarkMode;

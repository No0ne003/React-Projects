import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export type SelectOptions = {
  label: string;
  value: string | number;
};
type MultipleSelectProps = {
  multiple: true;
  onChange: (value: SelectOptions[]) => void;
  value: SelectOptions[];
};
type SingleSelectProps = {
  multiple?: false;
  onChange: (value: SelectOptions | undefined) => void;
  value?: SelectOptions;
};
type SelectProps = {
  options: SelectOptions[];
} & (SingleSelectProps | MultipleSelectProps);

const Select = ({ multiple, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  function selectOption(option: SelectOptions) {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOptions) {
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      className="relative w-[20em] min-h-[1.5em] border-[0.05em] border-solid border-border flex items-center gap-[0.5em] p-[0.5em] rounded-lg outline-none focus:border-primary"
    >
      <span className="grow flex gap-2 flex-wrap">
        {multiple
          ? value.map((v) => (
            <button
              key={v.value}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(v);
              }}
              className="flex items-center border-border border-[0.05em] rounded-sm px-2 gap-1 cursor-pointer bg-none outline-none hover:bg-secondary hover:border-primary/20 focus:bg-secondary focus:border-primary/20"
            >
              {v.label}
              <span className="text-[#777] outline-none cursor-pointer text-[1.25em] focus:text-border hover:text-border">
                &times;
              </span>
            </button>
          ))
          : value?.label}
      </span>
      <button
        className="text-[#777] outline-none cursor-pointer text-[1.25em] focus:text-border hover:text-border"
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        &times;
      </button>
      <div className="bg-border self-stretch w-[0.05em]"></div>
      <div className="border-[0.30em] border-transparent border-t-border translate-[0_25%] mx-1"></div>
      <ul
        className={cn(
          "absolute hidden max-h-[15em] overflow-y-auto border-[0.05em] border-border rounded-lg w-full left-0 top-[calc(100%+0.5rem)] bg-background z-[100]",
          isOpen ? "block" : null,
        )}
      >
        {options.map((option, index) => (
          <li
            key={option.value}
            onMouseEnter={() => setHighlightedIndex(index)}
            className={cn(
              "py-1 px-2 cursor-pointer",
              isOptionSelected(option)
                ? "bg-primary text-primary-foreground"
                : null,
              index === highlightedIndex
                ? "bg-secondary text-foreground"
                : null,
            )}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;

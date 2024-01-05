/* eslint-disable react/prop-types */
import { cn } from "../../utils/util";
import { forwardRef } from "react";

const Button = forwardRef(
  ({ children, className, varient, loading, disabled, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        disabled={disabled || loading}
        className={cn(
          "flex items-center max-w-lg rounded px-2 transition-colors duration-200 font-500",
          { "bg-[#444] cursor-not-allowed text-[#111]": disabled || loading },
          {
            "bg-[#1a1a1a] text-[#eee]": varient === "primary",
            "bg-[#F44747]/80 hover:bg-[#F44747] text-[#eee]":
              varient === "danger",
            "w-10 h-10 rounded-full justify-center border": varient === "icon",
          },
          className
        )}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

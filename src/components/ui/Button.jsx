import { cva } from "class-variance-authority";
import { cn } from "../../utils/util";

const buttonVariants = cva("inline-flex item-center justify-center w-full", {
  variants: {
    variant: {
      primary:
        "bg-[#100b00] hover:bg-white hover:text-[#100b00] hover:outline outline-1 capitalize rounded-md text-white px-3 py-2 ",
      secondary:
        "bg-white hover:bg-white/40 capitalize rounded-md text-black px-3 py-2 ",
      outline:
        "border bg-transparent border-[#100b00] hover:bg-[#100b00]/60 capitalize rounded-md text-[#100b00] px-3 py-2 ",
      destructive:
        "bg-red-500 hover:bg-red-500/80 capitalize rounded-md text-white px-3 py-2 ",
    },
    size: {
      default: "w-20 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

const Button = ({
  className,
  size,
  variant = buttonVariants,
  loading,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading}
      className={cn(buttonVariants({ size, variant, className }), {
        "bg-white outline outline-1 outline-black": loading,
      })}
    />
  );
};

export default Button;

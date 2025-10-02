
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef, ElementType, ComponentPropsWithoutRef } from "react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cascade-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-cascade-600 text-white hover:bg-cascade-700 shadow-sm",
        outline: "border border-cascade-200 bg-white hover:bg-cascade-50 text-cascade-700",
        ghost: "hover:bg-cascade-100 text-cascade-700",
        link: "text-cascade-600 hover:text-cascade-700 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-12 px-8 py-3 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define a type that allows for component polymorphism
type PolymorphicRef<C extends ElementType> = React.ComponentPropsWithRef<C>["ref"];
type PolymorphicComponentProps<C extends ElementType, Props = {}> = Props & 
  Omit<ComponentPropsWithoutRef<C>, keyof Props> & {
    as?: C;
  };

// Base Button props without any component-specific props
export type ButtonBaseProps = {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
  asChild?: boolean;
};

// The full Button props including the polymorphic pattern
export type ButtonProps<C extends ElementType = "button"> = PolymorphicComponentProps<C, ButtonBaseProps>;

// The actual Button component implementation using generics
const Button = forwardRef(function Button<C extends ElementType = "button">(
  { 
    className, 
    variant = "default", 
    size = "default", 
    isLoading = false, 
    as, 
    asChild,
    ...props 
  }: ButtonProps<C>, 
  ref: PolymorphicRef<C>
) {
  const Component = as || "button";
  
  // Remove asChild from props to prevent it from being passed to DOM
  const { asChild: _, ...restProps } = props as any;
  
  return (
    <Component
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      ref={ref}
      disabled={isLoading || (restProps as any).disabled}
      {...restProps}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      {props.children}
    </Component>
  );
});

Button.displayName = "Button";

export { Button };

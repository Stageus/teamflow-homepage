// package
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
// layer
import { cn } from '@/shared/lib/cn';

const buttonVariants = cva(
   'flex items-center justify-center gap-2 rounded-lg cursor-pointer',
   {
      variants: {
         variant: {
            default: 'bg-shade_4 hover:bg-shade_3 text-black dark:text-white',
            select: 'bg-primary hover:bg-secondary text-white',
            disabeld: 'bg-shade_5 cursor-not-allowed text-white',
            danger: 'bg-error hover:bg-secondary text-white',
         },
         size: {
            default: 'px-4 py-2 text-sm',
            sm: 'px-8 py-4 text-lg',
            lg: 'p-0',
         },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
     },
   },
);


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
   asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
   const { className, variant, size, asChild = false, ...defaultOptions } = props;
   const Comp = asChild ? Slot : 'button';
   return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...defaultOptions} />;
});

export { Button };
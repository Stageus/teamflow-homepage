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
            default: 'bg-shade_4 hover:bg-shade_5 text-white',
            select: 'bg-primary hover:bg-secondary text-white',
            disabeld: 'bg-shade_5 cursor-not-allowed text-white',
            danger: 'bg-error hover:bg-secondary text-white',
            ghost: 'bg-transparent text-gray hover:bg-shade_3'
         },
         sizes: {
            sm: 'px-3 py-1 text-sm',
            default: 'px-4 py-2 text-sm',
            lg: 'px-5 py-3 text-base',
         },
      },
      defaultVariants: {
        variant: 'default',
        sizes: 'default',
     },
   },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
   const { className, variant, sizes, asChild = false, ...defaultOptions } = props;
   const Comp = asChild ? Slot : 'button';
   return <Comp className={cn(buttonVariants({ variant, sizes, className }))} ref={ref} {...defaultOptions} />;
});

export { Button };


type ButtonProps = {
   asChild?: boolean;
} & VariantProps<typeof buttonVariants> & React.ButtonHTMLAttributes<HTMLButtonElement>;
// package
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

// layer
import { cn } from '@/shared/lib/cn';

const inputVariants = cva('w-full outline-none p-1 text-sm', {
   variants: {
      variant: {
         textInput: 'bg-transparent border-b-2 border-gray',
         searchInput: 'rounded-md',
      },
      sizes: {
      },
   },
   defaultVariants: { variant: 'textInput'},
});

interface InputProps
   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
      VariantProps<typeof inputVariants> {
        asChild?: boolean;
      }

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const { className, variant, sizes, type, asChild = false, ...defaultOptions } = props;
   const Comp = asChild ? Slot : 'input'

   return (
         <Comp className={cn(inputVariants({ variant, sizes, className }))} ref={ref} {...defaultOptions} type={type} />
   );
});

export { Input };

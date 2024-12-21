// package
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

// layer
import { cn } from '@/shared/lib/cn';

const inputVariants = cva('w-full outline-none p-1 text-sm text-black dark:text-white', {
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
 
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const { className, variant, sizes, asChild = false, ...defaultOptions } = props;
   const Comp = asChild ? Slot : 'input'

   return (
         <Comp className={cn(inputVariants({ variant, sizes, className }))} ref={ref} {...defaultOptions}/>
   );
});

export { Input };

type InputProps = {
   asChild? : boolean;
} & React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>
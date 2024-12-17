// package
import * as React from 'react';
import ReactDOM from 'react-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { Cross1Icon } from '@radix-ui/react-icons';
// layer
import { cn } from '@/shared/lib/cn';

const fullScreenVariants = cva('gradient-modal fixed inset-0 flex transition-transform z-50', {
   variants: {
      variant: {
         show: 'visible translate-x-0 opacity-100',
         hide: 'invisible -translate-x-full opacity-0',
      },
   },
   defaultVariants: {
      variant: 'hide',
   },
});

interface FullScreenModalProps extends VariantProps<typeof fullScreenVariants> {
   title: string;
   children: React.ReactElement;
   closeModal: () => void;
}

const FullScreenModal = (props: FullScreenModalProps) => {
   const { title, children, closeModal, variant } = props;

   return ReactDOM.createPortal(
      <div className={cn(fullScreenVariants({ variant }))}>
         <h1 className="absolute flex justify-center p-5 text-[30px] italic text-white">{title}</h1>
         <div
            onClick={closeModal}
            className="absolute flex items-center justify-end w-8 h-8 text-white cursor-pointer right-5 top-5 hover:text-secondary">
            <Cross1Icon className='w-full h-full'/>
         </div>
         <div className="flex items-center justify-center grow">{children}</div>
      </div>,
      document.body,
   );
};

export { FullScreenModal };

import { ComponentProps } from 'react';
import { CheckCircle } from 'lucide-react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'flex justify-center items-center bg-zinc-50 rounded text-zinc-900 font-medium text-sm hover:bg-zinc-200',
  variants: {
    size: {
      default: 'h-10 px-4',
      sm: 'h-8 px-3',
      xs: 'h-6 px-2 text-xs',
    },
    success: {
      true: 'bg-emerald-500 hover:bg-emerald-600',
    },
  },
  defaultVariants: {
    size: 'default',
    success: false,
  },
});

export interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof button> {}

export function Button({ success, size, className, ...props }: ButtonProps) {
  return (
    <button data-success={success} className={button({ size, success, className })} {...props}>
      {success ? <CheckCircle className="h-4 w-4" /> : props.children}
    </button>
  );
}

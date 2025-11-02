import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';

type ButtonProps = PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        variant?: 'default' | 'secondary';
    }
>;

export function Button({ variant = 'default', className = '', ...props }: ButtonProps) {
    const base = 'px-3 py-1 rounded text-sm';
    const variants: Record<string, string> = {
        default: 'bg-black text-white',
        secondary: 'bg-gray-200 text-black',
    };
    const classes = `${base} ${variants[variant]} ${className}`.trim();
    return <button className={classes} {...props} />;
}



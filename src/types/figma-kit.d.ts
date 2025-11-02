declare module 'figma-kit' {
    import * as React from 'react';
    export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
        size?: 'sm' | 'md' | 'lg';
    }
    export const Button: React.FC<ButtonProps>;
}



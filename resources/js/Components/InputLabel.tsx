import { Label } from '@/Components/ui/label';
import { LabelHTMLAttributes } from 'react';

export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <Label
            {...props}
            className={`block font-medium text-sm text-gray-700 dark:text-gray-300 ` + className}
        >
            {value ? value : children}
        </Label>
    );
}

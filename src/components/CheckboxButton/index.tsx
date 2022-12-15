import * as Checkbox from '@radix-ui/react-checkbox';
import { ReactNode } from 'react';
import { Box, CheckBoxRoot, Label } from './styles';

export interface CheckboxProps {
    icon: ReactNode;
    text: ReactNode;
    disabled?: boolean;
    value?: string;
}

export function CheckboxButton({ icon, text, disabled=false, value}: CheckboxProps) {
    return (
        <Box>
        <CheckBoxRoot disabled={disabled} value={value} >
            <Checkbox.CheckboxIndicator>
                {icon}
            </Checkbox.CheckboxIndicator>
        </CheckBoxRoot>
        <Label>
            {text}
        </Label>
        </Box>

    )
}
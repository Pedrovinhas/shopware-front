import * as Checkbox from '@radix-ui/react-checkbox';
import { ReactNode } from 'react';
import { Box, CheckBoxRoot, Label } from './styles';

export interface CheckboxProps {
    icon: ReactNode;
    text: ReactNode;
    disabled?: boolean;
}

export function CheckboxButton({ icon, text, disabled=false}: CheckboxProps) {
    return (
        <Box>
        <CheckBoxRoot disabled={disabled}>
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
import * as RadioGroup from '@radix-ui/react-radio-group';
import { RadioGroupItem } from './styles';

export interface RadioProps {
    value: string;
}

export function Radio({ value }: RadioProps) {
    return (
        <RadioGroupItem value={value} className='radio-group__item' id='r1'>
            <RadioGroup.Indicator className='RadioGroupIndicator'/>
        </RadioGroupItem>
    )
}
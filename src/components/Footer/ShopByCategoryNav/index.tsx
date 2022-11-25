import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Link } from 'react-router-dom';
import { ToggleGroupRoot, NavContainer, ToggleGroupItem } from './styles';
import { Text } from '../../Text';

export function ShopByCategoryNav() {
    return (
        <NavContainer>
        <Text color='bright' size='large' title='medium'> Shop by Category </Text>
        <ToggleGroupRoot defaultValue='1' type='single'>
            <Link to='*'>
                <ToggleGroupItem value='1'>
                Skincare
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='2'>
                Personal Care
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='3'>
                Handbags
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='4'>
                Apparels
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='5'>
                Watches
                </ToggleGroupItem>
            </Link>

            <Link to='*'>
                <ToggleGroupItem value='6'>
                Eye Wear
                </ToggleGroupItem>
            </Link>

            <Link to='*'>
                <ToggleGroupItem value='7'>
                Jewellery
                </ToggleGroupItem>
            </Link>
        </ToggleGroupRoot> 
        </NavContainer>
    )
}
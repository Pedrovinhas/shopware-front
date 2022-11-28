import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Link } from 'react-router-dom';
import { ToggleGroupRoot, NavContainer, ToggleGroupItem } from './styles';
import { Text } from '../../Text';

export function AboutNav() {
    return (
        <NavContainer>
        <Text color='bright' size='large' title='medium'> About</Text>
        <ToggleGroupRoot defaultValue='1' type='single'>
            <Link to='*'>
                <ToggleGroupItem value='1'>
                Contact Us
                <span className='separator'> | </span>
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='2'>
                About Us
                <span className='separator'> | </span>
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='3'>
                Careers
                <span className='separator'> | </span>
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='4'>
                Press
             
                </ToggleGroupItem>
            </Link>
        </ToggleGroupRoot> 
        </NavContainer>
    )
}
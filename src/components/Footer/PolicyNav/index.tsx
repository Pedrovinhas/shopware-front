import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Link } from 'react-router-dom';
import { ToggleGroupRoot, NavContainer, ToggleGroupItem } from './styles';
import { Text } from '../../Text';

export function PolicyNav() {
    return (
        <NavContainer>
        <Text color='bright' size='large' title='medium'> Policy </Text>
        <ToggleGroupRoot defaultValue='1' type='single'>
            <Link to='*'>
                <ToggleGroupItem value='1'>
                Return Policy
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='2'>
                Terms of Use
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='3'>
                Sitemap
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='4'>
                Security
                </ToggleGroupItem>
            </Link>
            <Link to='*'>
                <ToggleGroupItem value='5'>
                Privacy
                </ToggleGroupItem>
            </Link>

            <Link to='*'>
                <ToggleGroupItem value='6'>
                EPR Compliance
                </ToggleGroupItem>
            </Link>
        </ToggleGroupRoot> 
        </NavContainer>
    )
}
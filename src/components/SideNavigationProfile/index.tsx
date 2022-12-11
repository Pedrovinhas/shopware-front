import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '../Icons/Chevron/ChevronRightIcon';
import { Text } from '../Text';
import { ToggleGroupRoot } from './styles';


export interface NavigationItem {
    label?: string;
    children?: ReactNode;
}

export function SideNavigationProfile({ label, children }: NavigationItem) {
    const navigate = useNavigate()

    return (
        <ToggleGroupRoot defaultValue='Profile' type='single'>

            <ToggleGroup.Item value='Profile' onClick={() => navigate('/')} className='toggle-group__item'>
                
                    <span className="border">
                    
                    </span>
                <div className="item__text">
                    <Text color='dark' title='medium' size='large'>
                        Personal Information
                    </Text>
               
                <ChevronRightIcon isFilled/>
                </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item value='Refer and Earn' onClick={() => navigate('/')} className='toggle-group__item'>
                
                    <span className="border">
                    
                    </span>
                <div className="item__text">
                    <Text color='dark' title='medium' size='large'>
                        Refer and Earn
                    </Text>
               
                <ChevronRightIcon isFilled/>
                </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item value='My Orders' onClick={() => navigate('/')} className='toggle-group__item'>
                
                    <span className="border">
                    
                    </span>
                <div className="item__text">
                    <Text color='dark' title='medium' size='large'>
                        My Orders
                    </Text>
               
                <ChevronRightIcon isFilled/>
                </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item value='My Wishlist' onClick={() => navigate('/')} className='toggle-group__item'>
                
                    <span className="border">
                    
                    </span>
                <div className="item__text">
                    <Text color='dark' title='medium' size='large'>
                        My Wishlist
                    </Text>
               
                <ChevronRightIcon isFilled/>
                </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item value='My Reviews' onClick={() => navigate('/')} className='toggle-group__item'>
                
                    <span className="border">
                    
                    </span>
                <div className="item__text">
                    <Text color='dark' title='medium' size='large'>
                        My Reviews
                    </Text>
               
                <ChevronRightIcon isFilled/>
                </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item value='My Address Book' onClick={() => navigate('/')} className='toggle-group__item'>
                
                    <span className="border">
                    
                    </span>
                <div className="item__text">
                    <Text color='dark' title='medium' size='large'>
                        My Address Book
                    </Text>
               
                <ChevronRightIcon isFilled/>
                </div>
            </ToggleGroup.Item>

            <ToggleGroup.Item value='My Saved Cards' onClick={() => navigate('/')} className='toggle-group__item'>
                
                    <span className="border">
                    
                    </span>
                <div className="item__text">
                    <Text color='dark' title='medium' size='large'>
                        My Saved Cards
                    </Text>
               
                <ChevronRightIcon isFilled/>
                </div>
            </ToggleGroup.Item>

            


        </ToggleGroupRoot>
    )
}


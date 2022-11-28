import * as Tabs from '@radix-ui/react-tabs';
import { Children, ReactNode } from 'react';
import { BottomTab, TabsContent, TabsList, TabsRoot } from './styles';
import { Text } from '../Text';
import { HomeIcon } from '../Icons/HomeIcon';
import { ProfileIcon } from '../Icons/ProfileIcon';
import { CategoriesIcon } from '../Icons/CategoriesIcon';
import { HandbagsIconFilled } from '../Icons/HandbagsIconFilled';
import { HandbagsIconPrimary } from '../Icons/HandbagsIcon/HandbagsIconPrimary';
import { HandbagsIconSecondary } from '../Icons/HandbagsIcon/HandbagsIconSecondary';
import { HandbagsIconUnfilled } from '../Icons/HandbagsIconUnfilled';

export interface TabProps {
    children: string;
    value: string;
}

export function Tab({ children, value }: TabProps) {
    return (
        <BottomTab value={value}>
            { children }
        </BottomTab>
    )
}

export function BottomNavigation() {
    return (
        <TabsRoot defaultValue="1" orientation="vertical">
            <TabsList aria-label="Bottom Navigation">
                
            <BottomTab value='1'> 
                    <span className="icon__home">
                    <HomeIcon isFilled={false}/>
                    </span>
                    <span className='bottom__text'>
                    <Text size='small' title='medium' cursor='pointer' color='primary'>
                        Home
                    </Text>
                    </span>
                </BottomTab>

                <BottomTab value='2'> 
                    <span className="icon__categories">
                        <CategoriesIcon isFilled={false}/>
                    </span>
                   
                    <span className='bottom__text'>
                        <Text size='small' title='medium' cursor='pointer' color='primary'>
                        Categories
                        </Text>
                    </span>
                </BottomTab>


                <BottomTab value='3'> 
                    <span className="icon__profile">
                    <ProfileIcon isFilled/>
                    </span>
                    <span className='bottom__text'>
                    <Text size='small' title='medium' cursor='pointer' color='primary'>
                        Profile
                    </Text>
                    </span>
                </BottomTab>

                <BottomTab value='4'> 
                <span className="icon__bag">
                    <HandbagsIconUnfilled isFilled={false}/>
                </span>
                    <span className='bottom__text'>
                    <Text size='small' title='medium' cursor='pointer' color='primary'>
                        Bag
                    </Text>
                    </span>
                </BottomTab>

            </TabsList>
            <TabsContent value="1">
                
            </TabsContent>
            <TabsContent value="2">
                
            </TabsContent>
            <TabsContent value="3">
            
            </TabsContent>
        </TabsRoot>
    )
}

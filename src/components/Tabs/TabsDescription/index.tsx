import * as Tabs from '@radix-ui/react-tabs';
import { Children, ReactNode } from 'react';
import { StyledTabTrigger, TabsContent, TabsList, TabsRoot } from './styles';

export interface TabProps {
    children: string;
    value: string;
}

export function Tab({ children, value }: TabProps) {
    return (
        <StyledTabTrigger value={value}>
            { children }
        </StyledTabTrigger>
    )
}

export function TabsDescription() {
    return (
        <TabsRoot defaultValue="1" orientation="vertical">
            <TabsList aria-label="Description Products Tab">
                
                <Tab children='Product Description' value='1'/>

                <Tab children='Related Products' value='2'/>

                <Tab children='Ratings and Reviews' value='3'/>

            </TabsList>
            <TabsContent value="1">
                <strong> Product Description </strong>
                <span className='first-paragraph'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. 
                </span>
                <span className='second-paragraph'>
                Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. 
                </span>
                <span className='third-paragraph'>
                Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.
                </span>
            </TabsContent>
            <TabsContent value="2">
                <strong> Related Products </strong>
                <span className='first-paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. 
                </span>
                <span className='second-paragraph'>
                Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. 
                </span>
                <span className='third-paragraph'>
                Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.
                </span>
            </TabsContent>
            <TabsContent value="3">
                <strong> Ratings and Reviews </strong>
                <span className='first-paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. 
                </span>
                <span className='second-paragraph'>
                Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. 
                </span>
                <span className='third-paragraph'>
                Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.
                </span>
            </TabsContent>
        </TabsRoot>
    )
}

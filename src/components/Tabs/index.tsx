import { useState } from "react";
import { TabLink, TabsContainer, ToggleGroupItem, ToggleGroupRoot } from "./styles"

export function Tabs() {
    const [pageValue, setPageValue] = useState('1')

    return (
        <TabsContainer>
       <ToggleGroupRoot 
         type='single' 
         className='filter-icons'
         defaultValue='1'
        >
         <ToggleGroupItem value={pageValue}>
           <Tab label="1"/>
        </ToggleGroupItem>

         <ToggleGroupItem value='2'>
             <Tab label="2"/>
        </ToggleGroupItem>

        <ToggleGroupItem value='3'>
             <Tab label="3"/>
        </ToggleGroupItem>

        <ToggleGroupItem value='4'>
             <Tab label="4"/>
        </ToggleGroupItem>

        <ToggleGroupItem  value='5'>
             <Tab label="5"/>
        </ToggleGroupItem>
        
     </ToggleGroupRoot>

     <span className='tab-next' onClick={() => {setPageValue(pageValue + 1)}}   >
     <Tab label='Next'/>
     </span>

     </TabsContainer>
    )
}

export interface TabProps {
    label: string;
}

function Tab({ label }: TabProps) {
    return (
        <TabLink to='/'>
            {label}
        </TabLink>
    )
}
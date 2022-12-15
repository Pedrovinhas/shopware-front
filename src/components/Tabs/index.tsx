import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TabLink, TabsContainer, ToggleGroupItem, ToggleGroupRoot } from "./styles"

export interface TabsProps {
    onClick: () => void;
}

export function Tabs({ onClick }: TabsProps) {

    return (
        <TabsContainer>
       <ToggleGroupRoot 
         type='single' 
         className='filter-icons'
         defaultValue='1'
        >
         <ToggleGroupItem value='1'>
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

     <span className='tab-next' onClick={onClick}>
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
        <TabLink >
            {label}
        </TabLink>
    )
}


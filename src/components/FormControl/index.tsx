import { ReactNode } from "react";
import { ActionButton, LeadingIcon, TextFieldBox, TextFieldInput, TraillingIcon, TraillingIconTwo } from "./styles"

export interface FormControlProps extends LeadingIconProps, TextFieldInputProps, ActionButtonProps, TraillingIconProps, TraillingIconTwoProps {
    size: 'small' | 'medium' | 'big',
    children?: ReactNode;
} 

export interface TextFieldInputProps {
    text?: string;
}

export interface LeadingIconProps {
    hasLeadingIcon?: boolean
}

export interface ActionButtonProps {
    hasActionButton?: boolean;
    actionLabel?: string;
}

export interface TraillingIconProps {
    hasTraillingIcon?: boolean;
}
export interface TraillingIconTwoProps {
    hasTraillingIconTwo?: boolean;
}



export function TextField({ children, size, text, hasActionButton, hasTraillingIcon, hasTraillingIconTwo, hasLeadingIcon, actionLabel }: FormControlProps) {
    return (
      <TextFieldBox size={size}>
        <LeadingIcon hasLeadingIcon={hasLeadingIcon}>

        </LeadingIcon>
        <TextFieldInput placeholder={text}/>
         
       

        { hasActionButton &&
        
        <ActionButton>
                { actionLabel }
        </ActionButton>

        }
        
        { hasTraillingIcon && 
          <>
          <TraillingIcon hasTraillingIcon={hasTraillingIcon}>
        
          </TraillingIcon>
          
          <TraillingIconTwo hasTraillingIconTwo={hasTraillingIconTwo}>
         
          </TraillingIconTwo>
             
     </>
        }
        
      
    
        
      </TextFieldBox>
    )
}

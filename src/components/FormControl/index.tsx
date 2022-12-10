import React, { ReactNode } from "react";
import InputMask from "react-input-mask";
import { ActionButton, LeadingIcon, TextFieldBox, TextFieldInput, TraillingIcon, TraillingIconTwo } from "./styles"

export interface FormControlProps extends LeadingIconProps, TextFieldInputProps, ActionButtonProps, TraillingIconProps, TraillingIconTwoProps {
    size: 'small' | 'medium' | 'big' | 'intermediary',
    children?: ReactNode;
    mask?: string | Array<(string | RegExp)> | any;
} 

export interface TextFieldInputProps {
    text?: string;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
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



export function TextField({ mask, children, onChange, value, size, text, hasActionButton, hasTraillingIcon, hasTraillingIconTwo, hasLeadingIcon, actionLabel, ...props }: FormControlProps) {
    return (
      <TextFieldBox size={size}>
        <LeadingIcon hasLeadingIcon={hasLeadingIcon}>

        </LeadingIcon>
        
        <InputMask  mask={mask} onChange={onChange} value={value}>
        <TextFieldInput placeholder={text}  {...props}
        />
        </InputMask>
         
       

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

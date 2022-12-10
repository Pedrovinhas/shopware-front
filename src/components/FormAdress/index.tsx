import { Form } from "./styles";
import { Text } from "../Text";
import { TextField } from "../FormControl";
import React, { useEffect, useState } from "react";
import { cepApi } from "../../services/cepApi";

interface userAdress {
    street: string;
    state: string;
    city: string | undefined;
}

export function FormAdress() {

    const [pinCode, setPinCode] = useState<string>('')
    const [ userAdress, setUserAdress ] = useState<userAdress>()
 
    const handlePinCodeInput = (e:React.ChangeEvent<HTMLInputElement>) => {

        if(e.target.value?.length !== 8) {
          
        }
        setPinCode(e.target.value)
        
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }

    useEffect(() => {
        cepApi.get(`/ws/${pinCode}/json`)
            .then(({ data }) => {
             setUserAdress({ 
                city: data.localidade,
                state: data.uf,
                street: data.logradouro
             })
             console.log(data)
          })
          .then((err) => {
        
          })
    },

    [pinCode])

    return (
        <Form onSubmit={handleSubmit}>
                
                <div className="name">
                <Text as='label' size='large' color='highEmphasis' title='medium'>
                    Full Name
                </Text>
                <TextField text="Enter Name" size="medium"  />
                </div>

                <div className='phone-number'>
                <Text as='label' size='large' color='highEmphasis' title='medium'>
                    Phone Number
                </Text>
                <span className='span__phone'>
                    <TextField 
                        text="+11" 
                        size="small" 
                        mask="+99" 
                    />
                    <TextField 
                        text="Enter Number" 
                        size="medium" 
                        mask="99999-9999"
                    />
                </span>
                </div>  

                <div className="street">
                <Text as='label' size='large' color='highEmphasis' title='medium'>
                    Street Address
                </Text>
                <TextField 
                    text="Enter Address" 
                    size="medium"  
                    value={userAdress?.street}
                    />
                </div>

                <div className="state">
                <Text as='label' size='large' color='highEmphasis' title='medium'>
                    State
                </Text>
                <TextField text="Enter State" size="intermediary" value={userAdress?.state} />
                </div>
                
                <div className="city">
                <Text as='label' size='large' color='highEmphasis' title='medium'>
                    City
                </Text>
                <TextField text="Enter City" size="medium" value={userAdress?.city} />
                </div>
               
                <div className="pin-code">
                <Text as='label' size='large' color='highEmphasis' title='medium' >
                    Pin Code
                </Text>
                <TextField 
                    text="Enter Pin Code" 
                    size="intermediary" 
                    mask='99999-999' 
                    onChange={handlePinCodeInput}  
                    value={pinCode}
                    />
                </div>
                
           
        </Form>
    )
}
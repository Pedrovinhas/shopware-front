import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TextField } from "../../components/FormControl";
import { Heading } from "../../components/Heading";
import { StatusBar } from "../../components/StatusBar";
import { Text } from "../../components/Text";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { PhoneForm } from "./styles";


export function SignUpPhonePage() {
    const { handleCreateAccountWithPhoneNumber } = useAuth()
    const navigate = useNavigate()
    
    const [phoneNumber, setPhoneNumber] = useState('')

    async function createAccountWithPhoneNumber() {
        await handleCreateAccountWithPhoneNumber(phoneNumber)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
    }

    const handlePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(e.target.value?.length !== 8) {
          
        }
        setPhoneNumber(e.target.value)
        
    }

    return (
        <PhoneForm onSubmit={handleSubmit}>  
            <StatusBar/>
            <div className="phone-sign">
                <Heading color="primary" size='large' title='bold'>
                    Enter your phone number
                </Heading>
            
                <div className="phone__fields">
                    <TextField
                            text="+11"
                            size="small"
                            mask="+99"

                        />
                        <TextField
                            text="Enter Number"
                            size="medium"
                            mask="99999-9999"
                            onChange={handlePhoneNumber}  
                            value={phoneNumber.replace(/[^\w\s]/gi, '')}
                        />
                      
                </div>
                <Text color="lowEmphasis" size='medium' title="medium" onClick={() => navigate('')}>
                        A 4 digit code will be sent to this number.
                </Text>
                   
                <button className="buttons">
                <Button size="full" variant="primary" onClick={createAccountWithPhoneNumber}>
                        Next
                </Button>
                </button>


              

            </div>

        </PhoneForm>
    )
}

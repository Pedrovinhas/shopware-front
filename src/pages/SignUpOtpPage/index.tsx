import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TextField } from "../../components/FormControl";
import { Heading } from "../../components/Heading";
import { StatusBar } from "../../components/StatusBar";
import { Text } from "../../components/Text";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";


export function SignUpOtpPage() {
    const navigate = useNavigate()
    const { handleLoginWithOtp } = useAuth()

    const [otpNumber, setOtpNumber] = useState('')

    const phoneParsed = JSON.parse(localStorage.getItem('phone') || '{}' ) 

    console.log(phoneParsed)
    console.log(otpNumber)

    async function loginWithOtp() {
        await handleLoginWithOtp(phoneParsed, otpNumber)
    }
 

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
    }

    const handlePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(e.target.value?.length !== 4) {
          
        }
        setOtpNumber(e.target.value)
        
    }

    return (
        <form onSubmit={handleSubmit}>  
            <StatusBar/>
            <div className="phone-sign">
                <Heading color="primary" size='large' title='bold'>
                    Enter OTP
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
                            onChange={handlePhoneNumber}  
                            value={otpNumber}
                        />
                      
                </div>
                <Text color="lowEmphasis" size='medium' title="medium" onClick={() => navigate('')}>
                        A 4 digit code will be sent to this number.
                </Text>
                   
                <button className="buttons">
                <Button size="full" variant="primary" onClick={loginWithOtp}>
                    Verify & Create Account
                </Button>
                </button>


              

            </div>

        </form>
    )
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TextField } from "../../components/FormControl";
import { Heading } from "../../components/Heading";
import { StatusBar } from "../../components/StatusBar";
import { Text } from "../../components/Text";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../services/api";
import { OtpForm } from "./sytles";


export function SignUpOtpPage() {
    const navigate = useNavigate()
    const { handleLoginWithOtp } = useAuth()

    const [otpNumber, setOtpNumber] = useState('')
    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [thirdNumber, setThirdNumber] = useState('')
    const [fourthNumber, setFourthNumber] = useState('')

    const phoneParsed = JSON.parse(localStorage.getItem('phone') || '{}' ) 

    console.log(phoneParsed)
    console.log(otpNumber)

    async function loginWithOtp() {
        await handleLoginWithOtp(phoneParsed, OtpNumberAll)
    }
 

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
    }

    const handleFirstNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFirstNumber(e.target.value)
        
    }

    const handleSecondNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSecondNumber(e.target.value)
        
    }
    const handleThirdNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setThirdNumber(e.target.value)
        
    }
    const handleFourthNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFourthNumber(e.target.value)
        
    }
    const handlePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if(e.target.value?.length !== 4) {
          
        }
        setOtpNumber(e.target.value)
        
    }

    const OtpNumberAll = (firstNumber + secondNumber + thirdNumber + fourthNumber)

    return (
        <OtpForm onSubmit={handleSubmit}>  
            <StatusBar/>
            <div className="phone-sign">
                <Heading color="primary" size='large' title='bold'>
                    Enter OTP
                </Heading>
            
                <div className="phone__fields">
                    <TextField
                            size="small"
                            onChange={handleFirstNumber}
                            value={firstNumber}
                           
                        />
                          <TextField
                       
                            size="small"
                            onChange={handleSecondNumber}
                            value={secondNumber}
                         

                        />
                          <TextField
                         onChange={handleThirdNumber}
                         value={thirdNumber}
                            size="small"
                         
                        />
                          <TextField
                           onChange={handleFourthNumber}
                           value={fourthNumber}
                            size="small"
                           

                        />
                        {/* <TextField
                            text="Enter Number"
                            size="medium"
                            onChange={handlePhoneNumber}  
                            value={otpNumber}
                        /> */}
                      
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

        </OtpForm>
    )
}

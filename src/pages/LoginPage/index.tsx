import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { TextField } from "../../components/FormControl";
import { Heading } from "../../components/Heading";
import { StatusBar } from "../../components/StatusBar";
import { Text } from "../../components/Text";
import { useAuth } from "../../hooks/useAuth";
import { PhoneForm } from "./styles";


export function LoginPage() {
    const { handleLoginWithPassword } = useAuth() 
    const navigate = useNavigate()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerUserWithEmailAndPassword() {
        await handleLoginWithPassword(email, password)
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
    }

    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
      
        setEmail(e.target.value)
        e.preventDefault()
        
    }

    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        e.preventDefault()
    }

    return (
        <PhoneForm onSubmit={handleSubmit}>  
            <StatusBar/>
            <div className="phone-sign">
                <Heading color="primary" size='large' title='bold'>
                   Login
                </Heading>
            
                <div className="login__fields">
                        <TextField
                            text="Enter Email"
                            size="medium"
                            onChange={handleEmail}  
                            value={email}
                        />
                          <TextField
                            text="Enter Password"
                            size="medium"
                            onChange={handlePassword}  
                            value={password}
                            type='password'
                        />
                      
                </div>
                <Text color="lowEmphasis" size='medium' title="medium" onClick={() => navigate('')}>
                        Insert Email and Password to access your profile
                </Text>
                   
                <button className="buttons">
                <Button size="full" variant="primary" onClick={registerUserWithEmailAndPassword}>
                        Next
                </Button>
                </button>


              

            </div>

        </PhoneForm>
    )
}

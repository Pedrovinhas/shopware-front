import { Form, SectionPassword } from "./styles";
import { Text  } from "../Text";
import { TextField } from "../FormControl";
import { Separator } from "../Separator";
import { Button } from "../Button";

export function FormUser() {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }


    return (
        <Form onSubmit={handleSubmit}>

            <div className="form__names">
                <div className="label__text">
                    <Text as='label' size='large' color='highEmphasis' title='medium'>
                        First Name
                    </Text>
                    <TextField text="John" size="medium"  />
                </div>
                <div className="label__text">
                    <Text as='label' size='large' color='highEmphasis' title='medium'>
                        Last Name
                    </Text>
                    <TextField text="John" size="medium"  />
                </div>
            </div>

            <div className="label__email">
                <Text as='label' size='large' color='highEmphasis' title='medium'>
                    Email
                </Text>
                <TextField text="Johndoe@johndoe.com" size="full"  />
            </div>

            <div className='phone-number__container'>
                <Text as='label' size='large' color='highEmphasis' title='medium'>
                    Mobile Number
                </Text>
                <span className='span__phone'>
                    <TextField 
                        text="+11" 
                        size="small" 
                        mask="+99" 
                    />
                    <TextField 
                        text="9999-9999" 
                        size="medium" 
                        mask="99999-9999"
                    />
                </span>
            </div>  

            <div className="label__select">
                <Text as='label' size='large' color='highEmphasis' title='medium'>
                    Date of birth
                </Text>
                <TextField text="DD/MM/YYYY" size="medium"  />
            </div>

            <SectionPassword>
                <div className="header__password">
                    <Text size='extralarge' title="regular" color="dark">
                        Change Password
                    </Text>
                    <Separator/>
                </div>

                <div className="inputs__container">
                    <div className="label__text">
                        <Text as='label' size='large' color='highEmphasis' title='medium'>
                            Current Password
                        </Text>
                        <TextField type='password' text="*********" size="medium"  />
                    </div>
                    <div className="label__text">
                        <Text as='label' size='large' color='highEmphasis' title='medium'>
                            New Password
                        </Text>
                        <TextField type='password' text="*********"  size="medium"  />
                    </div>
                    <div className="label__text">
                        <Text as='label' size='large' color='highEmphasis' title='medium'>
                            Confirm Password
                        </Text>
                        <TextField type='password' text="*********"  size="medium"  />
                    </div>
                </div>
            </SectionPassword>
           
           <span className="submit__button">
                <Button size="smallTwo" variant="primary" >
                    Save Changes
                </Button>
           </span>
        </Form>
    )
}
import { useNavigate } from "react-router-dom";
import {Button} from "../../components/Button";
import {Heading} from "../../components/Heading";
import {Text} from "../../components/Text";
import {Container} from "./styles";

export function SignUpPage() {
    const navigate = useNavigate()

    return (
        <Container>
            <div className="sign-up">
                <Heading color="highEmphasis" size='midsmall' title='bold'>
                    The shopping destination you need
                </Heading>
                <div className="sign-up__buttons">

                    <Button size="large" variant="primary" onClick={() => navigate('/signup/phone')}>
                        Get Started
                    </Button>

                    <Text color="highEmphasis" size='medium' title="regular" onClick={() => navigate('/login')} cursor='pointer' decoration="underline">
                        I already have an account
                    </Text>
                </div>

            </div>

        </Container>
    )
}

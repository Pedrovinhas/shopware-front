import { Text } from "../../components/Text";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";
import { Container, TextContent } from "./styles";
import NotFoundImage from '../../assets/404.png';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export function PageNotFound() {
    const navigate = useNavigate()

    return (
     <>
    <Header/>
          <Container>
          
            <img src={NotFoundImage} alt='Imagem de página não encontrada'/>
            <TextContent>
            <Heading color="dark" size="medium" title="bold">
            Whoops!
            </Heading>
            <Text color="dark" size="medium" title="medium">
            We coudn’t find what you’re looking for. Try something else.
            </Text>
            </TextContent>
           
            <Button size="large" variant="primary" onClick={() => navigate('/')}>
                Back to Home
            </Button>
    
          </Container>
     <Footer/>
         </>
    )
}
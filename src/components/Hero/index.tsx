import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { Text } from "../Text";
import { HeroBlackFriday } from "./HeroBlackFriday";
import { Box, Card, HeroDiv } from "./styles";

export interface HeroProps extends HeroImg {
    hasBlackFriday: boolean;
}

export interface HeroImg {
    src?: string;
}

export function Hero({ hasBlackFriday, src }: HeroProps) {
    const navigate = useNavigate()
    return (
    <>
        {
            hasBlackFriday ?
            <HeroBlackFriday/>
            :

    <HeroDiv src={src}>
        <Card>
            <Box>
                <Heading color="primary" size='midlarge' title="strong">
                Carry your Funk
                </Heading>
                <Text color="primary" size='triplexlg' title='medium'>
                Trendy handbags collection for your party animal
                </Text>
            </Box>
           
            <Button variant="primary" size="intermediary" onClick={() => navigate('/categories/6388e6002aca14a914b6089b/products')}>
                <ArrowIcon isFilled/>
                See more
            </Button>
        </Card>
    </HeroDiv>       
} 
    </>        
    )
}
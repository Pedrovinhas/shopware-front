import { Button } from "../Button";
import { Heading } from "../Heading";
import { ArrowIcon } from "../Icons/ArrowIcon";
import { Text } from "../Text";
import { HeroBlackFriday } from "./HeroBlackFriday";
import { Box, Card, HeroDiv } from "./styles";

export interface HeroProps {
    hasBlackFriday: boolean;
}

export function Hero({ hasBlackFriday }: HeroProps) {
    return (
    <>
        {
            hasBlackFriday ?
            <HeroBlackFriday/>
            :



    <HeroDiv>
        <Card>
            <Box>
                <Heading color="primary" size='large' title="regular">
                Carry your Funk
                </Heading>
                <Text color="primary" size='medium' title='normal'>
                Trendy handbags collection for your party animal
                </Text>
            </Box>
           
            <Button variant="primary" size="large">
                <ArrowIcon isFilled/>
                See more
            </Button>
        </Card>
    </HeroDiv>       
} 
    </>        
    )
}
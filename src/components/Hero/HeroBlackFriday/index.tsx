import { Heading } from "../../Heading";
import { Box, Card, HeroDiv } from "./styles";

export function HeroBlackFriday() {
    return (
    <HeroDiv>
        <Card>
        <Box>
                <Heading color="dark" size='ultralarge' title="bold">
                UPTO 70% OFF
                </Heading>
                <Heading color="dark" size='ultralarge' title='medium'>
                BLACK FRIDAY
                </Heading>
            </Box>
        </Card>
        
    </HeroDiv>                
    )
}
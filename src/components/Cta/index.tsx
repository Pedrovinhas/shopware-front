import { ArrowIcon } from "../Icons/ArrowIcon"
import { Text } from "../Text"
import { CtaContainer } from "./styles"

export function Cta() {
    return (
        <CtaContainer> 
            <div className="square">
                <div className="retangle">
                    <div className="circle">

                    </div>
                </div>
            </div>
            <div className="cta__text">
                <Text color="bright" size="medium" title="medium">
                    Discover your favrouite products faster with CORA’L web app.
                </Text>
                <Text className="center" color="bright" size="medium" title="regular">
                    Add Shortcut
                    <ArrowIcon isFilled/>
                </Text>
            </div>
        </CtaContainer>
    )
}
import { FormUser } from "../FormUser";
import { Separator } from "../Separator";
import { Text } from "../Text";
import { PersonalInformationContainer } from "./styles";

export function ProfileSection() {
    return (
        <PersonalInformationContainer>
            <div className="information__header">
                <Text size='extralarge' title="regular" color="dark">
                    Personal Information
                </Text>
                <Separator/>
            </div>

            <FormUser/>
        </PersonalInformationContainer>
    )
}
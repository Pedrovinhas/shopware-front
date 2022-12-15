import { useAuth } from "../../hooks/useAuth";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Avatar } from "./styles";
import BrazilianNightmare from '../../assets/Avatar/brazilian-nightmare2.jpg'

export function UserAvatar() {
    const { user } = useAuth()

    console.log(user, 'cade')
    return (
        <Avatar>
            <img src={BrazilianNightmare} alt="Avatar Image" className='rounded__img' />
            <div className="user__informations">
                <Heading title='bold' color='highEmphasis' size='small'>
                    {user?.name}
                </Heading>
                <Text title='medium' size='medium' color='lowEmphasis'>
                    {user?.email}
                </Text>
                <Text title='medium' size='medium' color='lowEmphasis'>
                    {user?.phone}
                </Text>

            </div>
        </Avatar>
    )
}
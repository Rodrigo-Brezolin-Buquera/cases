import { Button, Input } from '@chakra-ui/react'
import { HeaderContainer } from './styled'


export const Header = () => {
   
    return (
        <HeaderContainer>
            <Input variant='filled'  placeholder='First name' />
            <Input variant='filled' placeholder='Last name' />
            <Input  variant='filled' placeholder='Participation' />
            <Button colorScheme='teal' size='md'>
                Send
            </Button>
        </HeaderContainer>
    )
}
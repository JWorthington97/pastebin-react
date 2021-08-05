import { Heading, Flex, Spacer, Box, Text } from '@chakra-ui/react'
import UserInputPaste from './UserInputPaste'
import postNewPaste from '../utils/postNewPaste'
import ShowRecentPastes from './ShowRecentPastes'
import { faPaste, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function MainContent(): JSX.Element {
    return (
        <>  
        <Flex pt="5" ml="25">
                <FontAwesomeIcon icon={faPaste} size="3x" color="#56b7ab"/> 
                {/* replace with Chakra icons */}
                <FontAwesomeIcon icon={faTrash} size="3x" color="#56b7ab"/>
                <Heading color="#56b7ab" ml="3">Pastebin</Heading>
            </Flex>
            <Box>
            <Flex h="100%" m="25">
                <UserInputPaste postNewPaste={postNewPaste} />
                <Spacer />
                <Box w="25%" >
                    <Heading size="lg" color="#ec643b">Recent Pastes</Heading>
                    <ShowRecentPastes />
                </Box>
            </Flex>
            </Box>
        </>
    )
}
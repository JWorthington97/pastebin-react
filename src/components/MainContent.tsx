import { Heading, Flex, Spacer, Box, Text } from '@chakra-ui/react'
import UserInputPaste from './UserInputPaste'
import postNewPaste from '../utils/postNewPaste'
import ShowRecentPastes from './ShowRecentPastes'

export default function MainContent(): JSX.Element {
    return (
        <>
            <Heading>Pastebin</Heading>
            <Flex h="100%" p="25">
                <UserInputPaste postNewPaste={postNewPaste} />
                <Spacer />
                <Box w="25%" >
                    <Text>Recent Pastes</Text>
                    <ShowRecentPastes />
                </Box>
            </Flex>
        </>
    )
}
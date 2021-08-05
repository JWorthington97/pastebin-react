import { Box, Text, Textarea, Flex, Button, Input} from '@chakra-ui/react'
import { useState } from 'react'
import { UserInputPasteProps } from '../utils/Types'



export default function UserInputPaste({postNewPaste}: UserInputPasteProps): JSX.Element {
    const [paste, setPaste] = useState("")
    const [title, setTitle] = useState("")
    const [submitResponse, setSubmitResponse] = useState("")

    return (
        <Box w="66%" align="left" pl="4">
            <Text textAlign="left">Title (optional)</Text>
            <Input  w="400px" size="sm" onChange={(event) => setTitle(event.target.value)}/>
            <Text textAlign="left">Paste</Text>
            <Box h="600px">
                <Textarea h="580px" w="80%" onChange={(event) => setPaste(event.target.value)}/>
            </Box>
            <Flex>
                <Button colorScheme="blue" onClick={() => postNewPaste({title, paste, setSubmitResponse})}>Submit</Button>
                {submitResponse !== "" && <Text pl="4" pt="2">{submitResponse}</Text>}
            </Flex>
        </Box>
    )
}
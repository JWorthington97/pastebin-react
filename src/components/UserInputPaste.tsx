import { Box, Text, Textarea, Flex, Button, Input, Heading} from '@chakra-ui/react'
import { useState } from 'react'
import { UserInputPasteProps } from '../utils/Types'



export default function UserInputPaste({postNewPaste}: UserInputPasteProps): JSX.Element {
    const [paste, setPaste] = useState("")
    const [title, setTitle] = useState("")
    const [submitResponse, setSubmitResponse] = useState("")

    return (
        <Box w="66%" align="left" >
            <Heading textAlign="left" mb="4" fontWeight="bold" size="lg" color="#ec643b">New Paste</Heading>
            <Input  w="400px" size="sm" placeholder="Title (optional)" boxShadow="md" mb="4" backgroundColor="white" onChange={(event) => setTitle(event.target.value)}/>
            <Box boxShadow="xl" h="600px">
                <Textarea h="100%" w="100%" resize="none" placeholder="Enter paste here" size="sm" backgroundColor="white" onChange={(event) => setPaste(event.target.value)}/>
            </Box>
            <Flex pt="10">
                <Button backgroundColor="#f8cb57" onClick={() => postNewPaste({title, paste, setSubmitResponse})}>Submit</Button>
                {submitResponse !== "" && <Text pl="4" pt="2">{submitResponse}</Text>}
            </Flex>
        </Box>
    )
}
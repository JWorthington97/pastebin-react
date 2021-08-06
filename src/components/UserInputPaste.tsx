import {
  Box,
  Text,
  Textarea,
  Flex,
  Button,
  Input,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { UserInputPasteProps } from "../utils/Types";

export default function UserInputPaste({
  postNewPaste,
}: UserInputPasteProps): JSX.Element {
  const [paste, setPaste] = useState("");
  const [title, setTitle] = useState("");
  const [submitResponse, setSubmitResponse] = useState("");

  return (
    <Box width={["90vw", "90vw", "80vw", "60vw"]} pl="4"> 
      <Heading
        textAlign="left"
        pb="4"
        fontWeight="bold"
        size="lg"
        color="#ec643b"
      >
        New Paste
      </Heading>
      <Input
        width="50vw"
        maxWidth="500"
        size="sm"
        placeholder="Title (optional)"
        boxShadow="md"
        mb="4"
        backgroundColor="white"
        onChange={(event) => setTitle(event.target.value)}
      />
      <Box boxShadow="xl" h="60vh">
        <Textarea
          h="100%"
          w="100%"
          resize="none"
          placeholder="Enter paste here"
          size="sm"
          backgroundColor="white"
          onChange={(event) => setPaste(event.target.value)}
        />
      </Box>
      <Flex pt="5" pb="5">
        <Button
          backgroundColor="#f8cb57"
          onClick={() => postNewPaste({ title, paste, setSubmitResponse })}
        >
          Submit
        </Button>
        {submitResponse !== "" && (
          <Text pl="4" pt="2">
            {submitResponse}
          </Text>
        )}
      </Flex>
    </Box>
  );
}

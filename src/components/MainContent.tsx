import { Heading, Flex, Spacer, Box, Icon } from "@chakra-ui/react";
import UserInputPaste from "./UserInputPaste";
import postNewPaste from "../utils/postNewPaste";
import ShowRecentPastes from "./ShowRecentPastes";
import { FaPaste, FaTrash } from "react-icons/fa";

export default function MainContent(): JSX.Element {
  return (
    <Box>
      <Flex backgroundColor="#f7f2df" ml="4" pt="2">
        <Icon as={FaPaste} w={10} h={10} mr="-2" color="#56b7ab" />
        <Icon as={FaTrash} w={10} h={10} color="#56b7ab" />
        <Heading color="#56b7ab" mb="2">Pastebin</Heading>
      </Flex>
      <Box>
        <Flex direction={["column", "column", "row", "row"]}>
          <UserInputPaste postNewPaste={postNewPaste} />
          <Spacer/>
          <ShowRecentPastes />
        </Flex>
      </Box>
    </Box>
  );
}

import { Paste } from "../utils/Types";
import {
  Box,
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import getRecentPastes from "../utils/getRecentPastes";
import moment from "moment";

export default function ShowRecentPastes(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chosen, setChosen] = useState({
    title: "",
    paste: "",
  });
  const [recents, setRecents] = useState<Paste[]>([]);

  useEffect(() => {
    getRecentPastes({ setRecents });
  }, []);
  return (
    <Box
      overflowY="scroll"
      width={["100%", "100%", "50%", "50", "25vw"]} 
      pl={["0","0","5"]}
      sx={{
        "&::-webkit-scrollbar": {
          width: "16px",
          borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
      }}
    >
      <Heading size="lg" color="#ec643b" pl="4">
        Recent Pastes
      </Heading>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent minHeight="70vh" minWidth="50vw"> 
        {/* Fix modal content too */}
          <ModalHeader>{chosen?.title || "No title"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea resize="none" isReadOnly>
              {chosen.paste}
            </Textarea>
          </ModalBody>
          <ModalHeader>Comments</ModalHeader>
        </ModalContent>
      </Modal>
      {recents.map((paste) => {
        return (
          <Box
            key={paste.time}
            borderBottom="1px"
            ml="4"
            mr="4"
            borderColor="#f8cb57"
            cursor="pointer"
            onClick={() => {
              setChosen(paste);
              onOpen();
            }}
          >
            <Text align="left" fontSize="s" fontWeight="bold">
              {paste?.title ? paste.title : <br />}
            </Text>
            <Text fontSize="sm" pl="2" pr="6"
            isTruncated>
              {paste.paste}
            </Text>
            <Text align="right" fontSize="xs" pr={["4","4","2"]}> 
              {moment(paste.time).fromNow()}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}

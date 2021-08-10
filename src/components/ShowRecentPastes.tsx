import { IPasteComment, Paste } from "../utils/Types";
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
  Button
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import getRecentPastes from "../utils/getRecentPastes";
import moment from "moment";
import getPasteComments from "../utils/getPasteComments";
import ShowPasteComments from "./ShowPasteComments";
import AddComment from "../utils/addComment";

export default function ShowRecentPastes(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chosen, setChosen] = useState({
    id: -1,
    title: "",
    paste: "",
  });
  const [recents, setRecents] = useState<Paste[]>([]);
  const [commentBody, setCommentBody] = useState("")
  const [showComments, setShowComments] = useState<IPasteComment[]>([])

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
        <ModalContent minWidth="50vw"> 
        {/* Fix modal content too to make responsive*/}
          <ModalHeader>{chosen?.title || "No title"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody> 
            <Textarea resize="none" height="40vh" isReadOnly value={chosen.paste}/>
          </ModalBody>
          <ModalHeader>Comments</ModalHeader>
          <ModalBody>
            <Box>
            {ShowPasteComments({showComments})}
            </Box>
            <Textarea placeholder="Add comment here..." onChange={(e) => setCommentBody(e.target.value)} />
            <Button mt="2" backgroundColor="#f8cb57" onClick={() => AddComment(JSON.stringify({paste_id: chosen.id,comment: commentBody}))}>Add Comment</Button>
          </ModalBody>
          
        </ModalContent>
      </Modal> 
      {recents.map((paste) => {
        return (
          <Box
            key={paste.id}
            borderBottom="1px"
            ml="4"
            mr="4"
            borderColor="#f8cb57"
            cursor="pointer"
            onClick={() => { 
              setChosen(paste);
              getPasteComments({paste_id: paste.id, setShowComments})
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

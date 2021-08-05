import { Paste } from "../utils/Types";
import {Box, Text, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Textarea} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import getRecentPastes from '../utils/getRecentPastes'
import moment from "moment";


export default function ShowRecentPastes(): JSX.Element {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [chosen, setChosen] = useState({
        title: "",
        paste: ""
    })
    const [recents, setRecents] = useState<Paste[]>([])

  useEffect(() => {
    getRecentPastes({setRecents})
  }, [])
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent maxW="56rem" maxH="56rem">
                    <ModalHeader>{chosen?.title || "No title"}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Textarea resize="none" isReadOnly>{chosen.paste}</Textarea>
                    </ModalBody>
                    <ModalHeader>Comments</ModalHeader>
                </ModalContent>
            </Modal>
            {recents.map((paste) => {
                return <Box key={paste.time} borderBottom="1px" borderColor="#f8cb57" m="6" pb="4" cursor="pointer" onClick={() => {setChosen(paste); onOpen()}}>
                    <Text align="left" pl="2" fontSize="s" fontWeight="bold">{paste?.title ? paste.title : <br/>}</Text>
                    <Text pl="10" pr="10" fontSize="sm">{paste.paste.slice(0, 50)}</Text>
                    <Text align="right" fontSize="xs" isTruncated>
                            {moment(paste.time).fromNow()}
                    </Text> 
                    
                </Box>
                    
                
            })}
        </div>
    )
}

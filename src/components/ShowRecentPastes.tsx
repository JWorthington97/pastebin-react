import { Paste } from "../utils/Types";
import {Box, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import getRecentPastes from '../utils/getRecentPastes'


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
                <ModalContent>
                    <ModalHeader>{chosen?.title || "No title"}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {chosen.paste}
                    </ModalBody>
                </ModalContent>
            </Modal>
            {recents.map((paste) => {
                return <>
                    <Box textShadow="1px" m="6" onClick={() => {setChosen(paste); onOpen()}}>{paste.paste.slice(0, 50)} </Box>
                    
                </>
            })}
        </div>
    )
}

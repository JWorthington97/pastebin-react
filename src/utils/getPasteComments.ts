import { IGetPasteCommentsProps } from "./Types"

export default async function getPasteComments({paste_id, setShowComments}: IGetPasteCommentsProps) {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pastes/comments/${paste_id}`) 

    const body = await response.json()
    setShowComments(body) 
} 
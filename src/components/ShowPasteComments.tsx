import { IShowPasteCommentsProps } from "../utils/Types";
import { Box, Text, Button, Flex} from '@chakra-ui/react'
import moment from "moment";
import deleteComment from "../utils/deleteComment";

export default function ShowPasteComments({showComments}: IShowPasteCommentsProps): JSX.Element {
    return <Box alignItems="center" mx={["0","0","0","5"]}>
        {showComments.map((comment) => {
            return <Flex key={comment.id} >
                <Box w={["85%", "85%","85%", "90%"]}>
                    <Text key={comment.id} fontSize="sm">{comment.comment}</Text>
                    <Text align="right" fontSize="xs">{moment(comment.time).fromNow()}</Text>
                </Box>
                <Box w={["15%", "15%", "15%", "10%"]}>
                    <Button variant="ghost" size="sm" color="red" onClick={() => deleteComment(comment.id)}>Delete</Button>
                </Box>
                </Flex> 
        })} 
    </Box>  
} 
import { PostNewPasteProps } from "./Types";

export default async function postNewPaste({
  title,
  paste,
  setSubmitResponse,
}: PostNewPasteProps) {
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pastes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      paste,
    }),
  });
  if (response.status === 201) {
    setSubmitResponse("Paste submitted!");
  } else {
    setSubmitResponse("Unable to submit paste");
  }
}

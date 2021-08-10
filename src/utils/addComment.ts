export default async function addComment(body: string) {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pastes/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body
    })

    if (response.status === 201) {
      window.alert("Comment added")
  }
    return response.status
  }
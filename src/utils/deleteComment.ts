export default async function deleteComment(id: number) {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/pastes/comments`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id})
      })

    if (response.status === 410) {
        window.alert("Comment deleted")
    }
}
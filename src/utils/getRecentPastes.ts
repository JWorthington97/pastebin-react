import { GetRecentPastesProps } from "./Types"

// type SetterFunction = (pastes: Paste[]) => void

// export default async function getTenMostRecentPastes(setRecents: SetterFunction) {
//     const response = await fetch("http://localhost:4000/pastes")
//     const body = await response.json()
//     setRecents(body)
//     return
// }

export default async function getTenMostRecentPastes({ setRecents }: GetRecentPastesProps) {
    const response = await fetch("http://localhost:4000/pastes")
    const body = await response.json()
    setRecents(body)
    return
}

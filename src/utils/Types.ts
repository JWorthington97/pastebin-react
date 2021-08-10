export interface Paste {
  id: number;
  title: string;
  paste: string;
  time: string;
}

export interface GetRecentPastesProps {
  setRecents(pastes: Paste[]): void;
}

export interface ShowRecentPastesProps {
  recents: Paste[];
}

export interface PostNewPasteProps {
  title?: string;
  paste: string;
  setSubmitResponse(response: string): void;
}

export interface UserInputPasteProps {
  postNewPaste(obj: PostNewPasteProps): void;
}

export interface IPasteComment {
  id: number,
  paste_id: number,
  comment: string,
  time: string
}

export interface IShowPasteCommentsProps {
  showComments: IPasteComment[]
}

export interface IGetPasteCommentsProps {
  paste_id: number,
  setShowComments(showComments: IPasteComment[]): void
}

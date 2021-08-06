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

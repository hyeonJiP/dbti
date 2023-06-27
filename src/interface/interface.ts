export interface ShowProps {
  isShow: boolean;
}

export type Question = {
  question: string;
  answers: {
    text: String;
    type: String;
  }[];
};

export type instrumentRange = {
  name: string;
  range: string;
  id: number;
  handleClick?: (name: string) => void;
};

export type answerChoicesProps = {
  instruments: instrumentRange[];
  handleClick: (name: string) => void;
};

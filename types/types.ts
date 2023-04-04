export type instrumentRange = {
  name: string;
  range: string;
  id: number;
  handleClick?: () => void;
};

export type answerChoicesProps = {
  instruments: instrumentRange[];
  handleClick: () => void;
};

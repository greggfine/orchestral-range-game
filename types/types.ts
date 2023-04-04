type handleClickFn = (name: string) => void;

export type Instrument = {
  name: string;
  range: string;
  id: number;
  handleClick?: handleClickFn;
};

export type answerChoicesProps = {
  instruments: Instrument[];
  handleClick: handleClickFn;
};

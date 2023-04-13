type handleClickFn = (name: string) => void;

export type Instrument = {
  name: string;
  range: string;
  id: number;
  image?: string;
  handleClick?: handleClickFn;
  shortDescription?: string;
  instrumentFamily?: string;
  btnsDisabled?: boolean;
};

export type answerChoicesProps = {
  instruments: Instrument[];
  handleClick: handleClickFn;
  btnsDisabled?: boolean;
};

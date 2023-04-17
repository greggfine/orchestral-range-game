export type Instrument = {
  name: string;
  range: string;
  id: number;
  image?: string;
  handleClick?: (name: string) => void;
  shortDescription?: string;
  family?: string;
  btnsDisabled?: boolean;
};

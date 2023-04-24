export type Instrument = {
  name: string;
  range: string;
  id: number;
  image?: string;
  handleClick?: () => void;
  shortDescription?: string;
  family?: string;
  btnsDisabled?: boolean;
};

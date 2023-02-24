import { StatusEnum } from './status-enum';

export interface AlertMessage  {
  status: StatusEnum;
  description: string;
}

export interface PrimaryAddress {
  address_line_1: string;
  city: string;
  state: string;
  zip_code: number;
}

export class PrimaryAddress implements PrimaryAddress {
  public constructor(init?: Partial<PrimaryAddress>) {
    Object.assign(this, init);
  }
}
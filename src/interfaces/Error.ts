export interface IDatabaseError {
  code: string;
  errno: number;
  sqlMessage: string;
  sqlState: string;
  fatal: boolean;
}

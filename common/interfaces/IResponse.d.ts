export default interface IResponse<Data> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Data[];
}

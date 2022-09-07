import { AxiosError } from 'axios';

const errorHandler = (error: unknown) => {
  if (error instanceof Error) {
    console.log(error.message);
  } else if (error instanceof AxiosError) {
    console.log(error.response?.statusText);
  } else {
    console.log(error);
  }
};

export default errorHandler;

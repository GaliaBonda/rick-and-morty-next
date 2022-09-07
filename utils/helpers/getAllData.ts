import api from '../../api/request';
import ICharacterApi from '../../types/ICharacterApi';
import ILocation from '../../types/ILocation';
import IResponse from '../../types/IResponse';
import errorHandler from './errorHandler';

const getAllData = async (path: string) => {
  let allData: (ILocation & ICharacterApi)[] = [];
  const firstPart: IResponse<ILocation & ICharacterApi> = await api.get(path);
  allData = [...allData, ...firstPart.results];
  const promises: Promise<IResponse<ICharacterApi & ILocation>>[] = [];

  try {
    for (let i = 2; i <= firstPart.info.pages; i++) {
      promises.push(api.get(`${path}/?page=` + i));
    }
    const data = await Promise.all(promises);
    data.forEach((item) => {
      allData = [...allData, ...item.results];
    });
  } catch (error) {
    errorHandler(error);
  }

  // *** Alternate way of getting all data from API (locations, episodes)

  // const ids: number[] = [];
  // try {
  //   const data: IResponse<ILocation & ICharacterApi> = await api.get(path);
  //   allData = [...data.results];
  //   for (let i = data.results.length + 1; i <= data.info.count; i++) {
  //     ids.push(i);
  //   }
  //   const otherData: (ILocation & ICharacterApi)[] = await api.get(
  //     `${path}/${ids.toString()}`
  //   );
  //   allData = [...allData, ...otherData];
  // } catch (error) {
  //   console.log(error);
  // }

  return allData;
};

export default getAllData;

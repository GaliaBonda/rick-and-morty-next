import api from '../../api/api';
import ICharacterApi from '../interfaces/ICharacterApi';
import ILocation from '../interfaces/ILocation';
import IResponse from '../interfaces/IResponse';

const getAllData = async (path: string) => {
  let allData: (ILocation & ICharacterApi)[] = [];
  const ids: number[] = [];
  try {
    const data: IResponse<ILocation & ICharacterApi> = await api.get(path);
    allData = [...data.results];
    for (let i = data.results.length + 1; i <= data.info.count; i++) {
      ids.push(i);
    }
    const otherData: (ILocation & ICharacterApi)[] = await api.get(
      `${path}/${ids.toString()}`
    );
    allData = [...allData, ...otherData];
  } catch (error) {
    console.log(error);
  }

  return allData;
};

export default getAllData;

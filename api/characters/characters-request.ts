import ICharacterApi from '../../types/ICharacterApi';
import IResponse from '../../types/IResponse';
import errorHandler from '../../utils/helpers/errorHandler';
import getAllData from '../../utils/helpers/getAllData';
import api from '../request';

class Characters {
  public getCharacters = async (endpoint: string = '/character') => {
    let characters: ICharacterApi[] = [];
    let nextPage = '';
    try {
      const data: IResponse<ICharacterApi> = await api.get(endpoint);
      characters = data.results;
      nextPage = data.info.next;
    } catch (error) {
      errorHandler(error);
    }
    return { characters, nextPage };
  };
  public getCharacter = async (id?: number | string | string[]) => {
    let character: ICharacterApi = {
      id: 0,
      name: '',
      status: '',
      species: '',
      gender: '',
      image: '',
    };
    try {
      character = await api.get(`/character/${id}`);
    } catch (error) {
      errorHandler(error);
    }
    return character;
  };
  public getAllCharacters = async () => {
    return await getAllData('/character');
  };
  public getFilteredCharacters = async (filter: string) => {
    let filteredCharacters: ICharacterApi[] = [];
    try {
      filteredCharacters = await getAllData('/character?' + filter);
    } catch (error: unknown) {
      errorHandler(error);
    }
    return filteredCharacters;
  };
}

const instance = new Characters();
export default instance;

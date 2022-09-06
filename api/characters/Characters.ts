import ICharacterApi from '../../types/ICharacterApi';
import IResponse from '../../types/IResponse';
import getAllData from '../../utils/helpers/getAllData';
import api from '../request';

export class Characters {
  getCharacters = async (endpoint: string = '/character') => {
    let characters: ICharacterApi[] = [];
    let nextPage = '';
    try {
      const data: IResponse<ICharacterApi> = await api.get(endpoint);
      characters = data.results;
      nextPage = data.info.next;
    } catch (error) {
      console.log(error);
    }
    return { characters, nextPage };
  };
  getCharacter = async (id?: number | string | string[]) => {
    const character = await api.get(`/character/${id}`);
    return character;
  };
  getAllCharacters = async () => {
    return await getAllData('/character');
  };
}

import ICharacterApi from '../../types/ICharacterApi';
import IResponse from '../../types/IResponse';
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
      console.log(error);
    }
    return { characters, nextPage };
  };
  public getCharacter = async (id?: number | string | string[]) => {
    const character = await api.get(`/character/${id}`);
    return character;
  };
  public getAllCharacters = async () => {
    return await getAllData('/character');
  };
}

const instance = new Characters();
export default instance;

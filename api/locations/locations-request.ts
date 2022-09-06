import getAllData from '../../utils/helpers/getAllData';

class Locations {
  getAllLocations = async () => {
    return await getAllData('/location');
  };
}

const instance = new Locations();
export default instance;

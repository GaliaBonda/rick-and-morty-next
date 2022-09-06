import getAllData from '../../utils/helpers/getAllData';

export class Locations {
  getAllLocations = async () => {
    return await getAllData('/location');
  };
}

import React, { FC, useState } from 'react';
import api from '../../api/api';
import ILocation from '../../common/interfaces/ILocation';
import IResponse from '../../common/interfaces/IResponse';
import StatisticsLayout from '../../components/StatisticsLayout';
import Table from '../../components/Table';

interface Props {
  locationsRows: { id: number; data: (string | number)[] }[];
}

export const getStaticProps = async () => {
  //   const promises = [api.get('/location')];
  //   for (let i = 2; i <= 7; i++) {
  //     promises.push(api.get('/location/?page=' + i));
  //   }
  //   let allLocations: ILocation[] = [];
  //   try {
  //     const data = await Promise.all(promises);
  //     console.log(data);

  //     data.forEach((item) => {
  //       allLocations = [...allLocations, ...item.data.results];
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }

  const locationsIds: number[] = [];
  const data: IResponse<ILocation> = await api.get('location/');
  let allLocations: ILocation[] = [...data.results];
  for (let i = 21; i <= data.info.count; i++) {
    locationsIds.push(i);
  }
  const otherLocations: ILocation[] = await api.get(
    'location/' + locationsIds.toString()
  );
  allLocations = [...allLocations, ...otherLocations];
  const locationsRows = allLocations
    .map((item) => {
      return { id: item.id, data: [item.name, item.residents?.length || 0] };
    })
    .sort((a, b) => {
      return a.data[1] <= b.data[1] ? 1 : -1;
    });
  return { props: { locationsRows } };
};

const Locations: FC<Props> = ({ locationsRows }) => {
  const [sortedRows, setSortedRows] = useState(locationsRows);

  const changeSort = (desc: boolean, column: number) => {
    setSortedRows((startRows) => {
      if (desc) {
        return [...startRows].sort((a, b) =>
          a.data[column] >= b.data[column] ? 1 : -1
        );
      } else {
        return [...startRows].sort((a, b) =>
          a.data[column] <= b.data[column] ? 1 : -1
        );
      }
    });
  };

  return (
    <StatisticsLayout imagesHidden={true}>
      <Table
        header={['Location', 'Number of characters']}
        rows={sortedRows}
        changeSort={changeSort}
      />
    </StatisticsLayout>
  );
};

export default Locations;

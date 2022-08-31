import React, { FC, useState } from 'react';
import api from '../../api/api';
import ICharacterApi from '../../common/interfaces/ICharacterApi';
import StatisticsLayout from '../../components/StatisticsLayout';
import Table from '../../components/Table';

interface Props {
  episodesRows: { id: number; data: (string | number)[] }[];
}

export const getStaticProps = async () => {
  const charactersIds: number[] = [];
  for (let i = 1; i < 827; i++) {
    charactersIds.push(i);
  }
  let allCharacters: ICharacterApi[] = [];
  try {
    allCharacters = await api.get('/character/' + charactersIds.toString());
  } catch (error) {
    console.log(error);
  }
  const episodesRows = allCharacters
    .map((item) => {
      return { id: item.id, data: [item.name, item.episode?.length || 0] };
    })
    .sort((a, b) => {
      return a.data[1] <= b.data[1] ? 1 : -1;
    });

  return { props: { episodesRows } };
};

const Episodes: FC<Props> = ({ episodesRows }) => {
  const [sortedRows, setSortedRows] = useState(episodesRows);

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
        header={['Character name', 'Number of episodes']}
        rows={sortedRows}
        changeSort={changeSort}
      />
    </StatisticsLayout>
  );
};

export default Episodes;

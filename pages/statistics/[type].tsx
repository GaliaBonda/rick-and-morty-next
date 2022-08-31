import React, { FC, useEffect, useState } from 'react';
import api from '../../api/api';
import ICharacterApi from '../../common/interfaces/ICharacterApi';
import ILocation from '../../common/interfaces/ILocation';
import IResponse from '../../common/interfaces/IResponse';
import StatisticsLayout from '../../components/StatisticsLayout';
import Table from '../../components/Table';

interface Props {
  rows: { id: number; data: (string | number)[] }[];
  heading: string[];
}

interface Paths {
  params: {
    type: string;
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { type: 'episodes' } },
      { params: { type: 'locations' } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Paths) => {
  const ids: number[] = [];
  const path = params.type === 'episodes' ? '/character' : '/location';

  const data: IResponse<ILocation & ICharacterApi> = await api.get(path);

  let allData: (ILocation & ICharacterApi)[] = [...data.results];
  for (let i = data.results.length + 1; i <= data.info.count; i++) {
    ids.push(i);
  }
  const otherData: (ILocation & ICharacterApi)[] = await api.get(
    `${path}/${ids.toString()}`
  );
  allData = [...allData, ...otherData];
  const rows = allData
    .map((item) => {
      return {
        id: item.id,
        data: [
          item.name,
          params.type === 'episodes'
            ? item.episode?.length || 0
            : item.residents?.length || 0,
        ],
      };
    })
    .sort((a, b) => {
      return a.data[1] <= b.data[1] ? 1 : -1;
    });
  const heading =
    params.type === 'episodes'
      ? ['Character name', 'Number of episodes']
      : ['Location', 'Number of characters'];
  return { props: { rows, heading } };
};

const StatisticTable: FC<Props> = ({ rows, heading }) => {
  const [sortedRows, setSortedRows] = useState(rows);

  useEffect(() => {
    setSortedRows(rows);
  }, [rows]);

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
      <Table header={heading} rows={sortedRows} changeSort={changeSort} />
    </StatisticsLayout>
  );
};

export default StatisticTable;

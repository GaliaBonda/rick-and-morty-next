import React, { FC, useEffect, useState } from 'react';
import getAllData from '../../common/utils/getAllData';
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
  const path = params.type === 'episodes' ? '/character' : '/location';
  const allData = await getAllData(path);

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

  useEffect(() => {
    setSortedRows(rows);
  }, [rows]);

  return (
    <StatisticsLayout imagesHidden={true}>
      <Table header={heading} rows={sortedRows} changeSort={changeSort} />
    </StatisticsLayout>
  );
};

export default StatisticTable;

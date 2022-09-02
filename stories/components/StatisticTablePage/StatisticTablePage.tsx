import React, { FC, useEffect, useState } from 'react';
import StatisticsLayout from '../StatisticsLayout/StatisticsLayout';
import Table from '../Table/Table';

interface Props {
  rows: { id: number; data: (string | number)[] }[];
  heading: string[];
}

const StatisticTablePage: FC<Props> = ({ rows, heading }) => {
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

export default StatisticTablePage;

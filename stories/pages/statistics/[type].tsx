import React, { FC } from 'react';
import getAllData from '../../../common/utils/getAllData';
import StatisticTablePage from '../../components/StatisticTablePage/StatisticTablePage';
import { wrapper } from '../../../store/store';

interface Props {
  rows: { id: number; data: (string | number)[] }[];
  heading: string[];
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

export const getStaticProps = wrapper.getStaticProps(() => async (context) => {
  const path = context.params?.type === 'episodes' ? '/character' : '/location';
  const allData = await getAllData(path);

  const rows = allData
    .map((item) => {
      return {
        id: item.id,
        data: [
          item.name,
          context.params?.type === 'episodes'
            ? item.episode?.length || 0
            : item.residents?.length || 0,
        ],
      };
    })
    .sort((a, b) => {
      return a.data[1] <= b.data[1] ? 1 : -1;
    });

  const heading =
    context.params?.type === 'episodes'
      ? ['Character name', 'Number of episodes']
      : ['Location', 'Number of characters'];

  return { props: { rows, heading } };
});

const StatisticTable: FC<Props> = ({ rows, heading }) => {
  return <StatisticTablePage rows={rows} heading={heading} />;
};

export default StatisticTable;

import React, { FC } from 'react';
import { StatisticTablePage } from '../../components/StatisticTablePage/StatisticTablePage';
import { wrapper } from '../../store/configureStore';
import requestCharacters from '../../api/characters/characters-request';
import requestLocations from '../../api/locations/locations-request';

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
  let allData;
  let property: 'episode' | 'residents';
  let heading;
  switch (context.params?.type) {
    case 'episodes': {
      property = 'episode';
      heading = ['Character name', 'Number of episodes'];
      allData = await requestCharacters.getAllCharacters();
      break;
    }
    default: {
      property = 'residents';
      heading = ['Location', 'Number of characters'];
      allData = await requestLocations.getAllLocations();
    }
  }
  const rows = allData
    .map((item) => {
      return {
        id: item.id,
        data: [item.name, item[property]?.length || 0],
      };
    })
    .sort((a, b) => {
      return a.data[1] <= b.data[1] ? 1 : -1;
    });

  return { props: { rows, heading } };
});

const StatisticTable: FC<Props> = ({ rows, heading }) => {
  return <StatisticTablePage rows={rows} heading={heading} />;
};

export default StatisticTable;

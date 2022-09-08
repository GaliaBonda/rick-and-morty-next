import React, { FC } from 'react';
import { Nav } from '../../components/Nav/Nav';
import { SearchForm } from '../../components/SearchForm/SearchForm';

const TestPage: FC = () => {
  const links = [
    { link: '/', title: 'Main' },
    { link: '/statistics', title: 'Statistics' },
    { link: '/statistics/episodes', title: 'Episodes' },
    { link: '/statistics/locations', title: 'Locations' },
  ];
  return (
    <>
      <Nav links={links} />
      <SearchForm />
    </>
  );
};

export default TestPage;

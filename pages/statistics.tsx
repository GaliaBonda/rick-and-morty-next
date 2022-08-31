import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import LinkView from '../components/LinkView';
import Nav from '../components/Nav';
import { StyledDiv } from '../styles/Statistics.styles';

const Statistics: FC = () => {
  const links = [{ link: '/', title: '← Back to Main' }];
  const [activeTab, setActiveTab] = useState('');
  const router = useRouter();
  console.log(router);

  const pathname = router.pathname as string;

  useEffect(() => {
    if (pathname.includes('episodes')) {
      setActiveTab('episodes');
    } else if (pathname.includes('locations')) {
      setActiveTab('locations');
    } else {
      setActiveTab('');
    }
  }, [pathname]);

  return (
    <>
      <Nav links={links} />
      <StyledDiv data-testid='test-statistics'>
        <LinkView
          // link='/episodes'
          link={{ pathname: '/statistics/[slug]', query: { slug: 'episodes' } }}
          title='Episodes'
          image='/rm-episodes.webp'
          hiddenImage={activeTab.length > 0}
          handleClick={() =>
            setActiveTab((prevState) =>
              prevState !== 'episodes' ? 'episodes' : ''
            )
          }
          activeTab={activeTab === 'episodes'}
        />
        <LinkView
          link={{
            pathname: '/statistics/[slug]',
            query: { slug: 'locations' },
          }}
          title='Locations'
          image='/rm-locations.webp'
          hiddenImage={activeTab.length > 0}
          handleClick={() =>
            setActiveTab((prevState) =>
              prevState !== 'locations' ? 'locations' : ''
            )
          }
          activeTab={activeTab === 'locations'}
        />
      </StyledDiv>
      {/* {activeTab.length > 0 && <Outlet />} */}
    </>
  );
};

export default Statistics;

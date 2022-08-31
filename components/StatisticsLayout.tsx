import { useRouter } from 'next/router';
import React, { FC } from 'react';
import LinkView from '../components/LinkView';
import Nav from '../components/Nav';
import { StyledDiv } from '../styles/Statistics.styles';

interface Props {
  children?: JSX.Element;
  imagesHidden: boolean;
}

const StatisticsLayout: FC<Props> = ({ children, imagesHidden }) => {
  const links = [{ link: '/', title: '← Back to Main' }];
  const router = useRouter();

  const query = router.query.type;

  const clickHandler = (tab: string) => {
    if (query === tab) {
      router.push('/statistics');
    }
  };
  return (
    <>
      <Nav links={links} />
      <StyledDiv data-testid='test-statistics'>
        <LinkView
          link={
            query === 'episodes'
              ? { pathname: '/statistics' }
              : { pathname: '/statistics/episodes' }
          }
          title='Episodes'
          image='/rm-episodes.webp'
          hiddenImage={imagesHidden}
          activeTab={query === 'episodes'}
          clickHandler={() => clickHandler('episodes')}
        />
        <LinkView
          link={
            query === 'locations'
              ? { pathname: '/statistics' }
              : {
                  pathname: '/statistics/locations',
                }
          }
          title='Locations'
          image='/rm-locations.webp'
          hiddenImage={imagesHidden}
          activeTab={query === 'locations'}
          clickHandler={() => clickHandler('locations')}
        />
      </StyledDiv>
      {children}
    </>
  );
};

export default StatisticsLayout;

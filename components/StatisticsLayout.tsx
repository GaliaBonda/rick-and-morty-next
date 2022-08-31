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

  const pathname = router.pathname as string;

  return (
    <>
      <Nav links={links} />
      <StyledDiv data-testid='test-statistics'>
        <LinkView
          link={
            pathname.includes('episodes')
              ? { pathname: '/statistics' }
              : { pathname: '/statistics/episodes' }
          }
          title='Episodes'
          image='/rm-episodes.webp'
          hiddenImage={imagesHidden}
          activeTab={pathname.includes('episodes')}
        />
        <LinkView
          link={
            pathname.includes('locations')
              ? { pathname: '/statistics' }
              : {
                  pathname: '/statistics/locations',
                }
          }
          title='Locations'
          image='/rm-locations.webp'
          hiddenImage={imagesHidden}
          activeTab={pathname.includes('locations')}
        />
      </StyledDiv>
      {children}
    </>
  );
};

export default StatisticsLayout;

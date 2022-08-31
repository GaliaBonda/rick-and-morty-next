import React, { FC } from 'react';
import Link from 'next/link';
import {
  StyledHeading,
  StyledImage,
  StyledLink,
} from '../styles/LinkView.styles';

interface Props {
  link: { pathname: string; query?: { slug: string } };
  title: string;
  image: string;
  hiddenImage: boolean;
  activeTab: boolean;
}

const LinkView: FC<Props> = ({
  link,
  title,
  image,
  hiddenImage,
  activeTab,
}) => {
  return (
    <Link href={link}>
      <StyledLink $active={activeTab} data-testid='test-link'>
        <StyledHeading>{title}</StyledHeading>
        {!hiddenImage && <StyledImage src={image} />}
      </StyledLink>
    </Link>
  );
};

export default LinkView;

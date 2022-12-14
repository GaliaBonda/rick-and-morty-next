import React, { FC } from 'react';
import Link from 'next/link';
import { StyledHeading, StyledImage, StyledLink } from './LinkView.styles';

interface Props {
  link: { pathname: string };
  title: string;
  image: string;
  hiddenImage: boolean;
  activeTab: boolean;
  clickHandler: () => void;
}

export const LinkView: FC<Props> = ({
  link,
  title,
  image,
  hiddenImage,
  activeTab,
  clickHandler,
}) => {
  return (
    <Link href={link}>
      <StyledLink
        $active={activeTab}
        data-testid='test-link'
        onClick={clickHandler}
      >
        <StyledHeading>{title}</StyledHeading>
        {!hiddenImage && <StyledImage src={image} alt={title} />}
      </StyledLink>
    </Link>
  );
};

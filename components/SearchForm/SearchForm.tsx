import React, { FC, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { StyledForm, StyledButton, StyledHeader } from './SearchForm.styles';
import { SearchInput } from '../SearchInput/SearchInput';

export const SearchForm: FC = () => {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      status: { value: string };
      species: { value: string };
      type: { value: string };
      gender: { value: string };
    };

    const data = {
      name: target.name.value,
      status: target.status.value,
      species: target.species.value,
      type: target.type.value,
      gender: target.gender.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/search';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();

    router.push('/search/result' + result.data);
  };

  return (
    <>
      <StyledHeader>Find your favorite characters</StyledHeader>
      <StyledForm onSubmit={handleSubmit}>
        <SearchInput name='name' id='name' />
        <SearchInput name='status' id='status' />
        <SearchInput name='species' id='species' />
        <SearchInput name='type' id='type' />
        <SearchInput name='gender' id='gender' />
        <StyledButton type='submit'>Search</StyledButton>
      </StyledForm>
    </>
  );
};

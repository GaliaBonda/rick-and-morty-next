import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { StyledForm, StyledButton } from './SearchForm.styles';
import { SearchInput } from '../SearchInput/SearchInput';

export const SearchForm: FC = () => {
  const [searchName, setSearchName] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchSpecies, setSearchSpecies] = useState('');

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Get data from the form.
    // console.log(userName);
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

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/search';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    console.log(result.data);

    router.push('/search/result' + result.data);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SearchInput name='name' id='name' />
      <SearchInput name='status' id='status' />
      <SearchInput name='species' id='species' />
      <SearchInput name='type' id='type' />
      <SearchInput name='gender' id='gender' />

      <StyledButton type='submit'>Btn</StyledButton>
    </StyledForm>
  );
};

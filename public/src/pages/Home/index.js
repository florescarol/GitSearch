import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import Repositories from '../Repositories';

function App() {
  const [ username, setUsername ] = useState('')
  const hist = useHistory();
  const [error, setError] = useState(false)

  function handleSearch() {
    axios.get(`https://api.github.com/users/${username}/repos`).then(response => {
      const repositories = response.data;
      console.log(repositories);
      const repositoriesName = [];

      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      localStorage.setItem('username', username)
      hist.push('/repositories')
      
    })
    .catch(err => {
      setError(true);
    })
  }

  return (
    <>
      <S.Container>
        <S.Title>GitSearch</S.Title>
        <S.SubTitle>Find GitHub repositories by searching an username:</S.SubTitle>
        <S.Input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <S.Button type="button" onClick={handleSearch}>Search</S.Button>
      </S.Container>
      <S.Container>
        {error? <S.ErrorMessage>An error has occurred. Try again.</S.ErrorMessage> : ""}
      </S.Container>
    </>
  );
}

export default App;
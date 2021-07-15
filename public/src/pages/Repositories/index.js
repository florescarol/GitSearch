import React, { useEffect, useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {
    const hist = useHistory();
    const [repositories, setRepositories] = useState([]);
    const [username, setUsername] = useState();

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if (repositoriesName != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            let username = localStorage.getItem('username');
            setUsername(username);
            localStorage.clear();
        }
        else {
            hist.push('/')
        }


        
    }, [])

    return (
        <>
            <S.Title>{username}'s repositories</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem><b>Repository name:</b> {repository} </S.ListItem>
                    )
                })
                }
            </S.List>
            <S.LinkHome to='/'>Voltar</S.LinkHome>
        </>
    )
}
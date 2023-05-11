import { Container, Profile, Welcome, UserName } from './styles';
import { useMemo } from 'react';
import {emojis} from '../../utils/emojis';
import { Toggle } from '../Toggle';

export const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return(
        <Container>
         <Toggle />
            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Gabriel Batemarque</UserName>
            </Profile>
        </Container>
    );
};
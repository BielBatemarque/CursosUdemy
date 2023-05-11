import { Container, Profile, Welcome, UserName } from './styles';
import { useMemo } from 'react';
import emojis from '../../utils/emojis';

export const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    return(
        <Container>
            <h1>MainHeader</h1>

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>Gabriel Batemarque</UserName>
            </Profile>
        </Container>
    );
};
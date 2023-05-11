import { Container, ToggleLabel, ToggleSelectot } from './styles';

export const Toggle: React.FC = () => {
    return(
        <Container>
            <ToggleLabel>Light</ToggleLabel>
                <ToggleSelectot  
                checked 
                onChange={() => console.log('mudou')} 
                uncheckedIcon={false} 
                checkedIcon={false}
                />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
}
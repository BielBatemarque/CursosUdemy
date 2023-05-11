import { Container, ToggleLabel, ToggleSelectot } from './styles';
import { useState} from 'react';

export const Toggle: React.FC = () => {
    const [checked, setCheckd] = useState<boolean>(true);
    return(
        <Container>
            <ToggleLabel>Light</ToggleLabel>
                <ToggleSelectot  
                checked={checked}
                onChange={() => setCheckd(s => !s)} 
                uncheckedIcon={false} 
                checkedIcon={false}
                />
            <ToggleLabel>Dark</ToggleLabel>
        </Container>
    );
}
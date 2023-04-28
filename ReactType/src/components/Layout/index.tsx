import { Grid } from './styles';
import { MainHeader } from '../MainHeader/index';
import { Aside } from '../Aside/index';
import { Content } from '../Content/index';

export const Layout: React.FC = () => {
    return(
        <Grid>
           <MainHeader />
           <Aside />
           <Content />
        </Grid>
    );
};
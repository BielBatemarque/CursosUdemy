import { Link } from "react-router-dom";
//a -> causa um full reload, já o link não apartir do link pode reaproveitar coisas da página

export const Menu = () => {
    return(
        <nav style={{ width: '100%', display: 'flex', justifyContent:'space-around', height: '60px', alignItems: 'center'}}>
           <Link to='/'>Home</Link> 
           <a href="/">Home (A)</a>
           <Link to='/abc'>Abc</Link>
           <a href="/abc">Abc (a)</a>
        </nav>
    );
};
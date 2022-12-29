
import CategoryList from "./components/CategoryList";
import CategoryRegister from "./components/CategoryRegister";
import ProductList from "./components/ProductList";
import ProductRegister from "./components/ProductRegister";
import { useState } from "react";


function App() {
  const [visivel, setVisivel] = useState(1);
 function seletorDeComponente(){
  if(visivel == 1){
    return <ProductRegister texto ={'componente de cadastro de produtos'}/>;
  }else if(visivel ==2){
    return <ProductList texto ={'componente de listagem de produtos'}/>;
  }else if(visivel == 3 ){
    return <CategoryRegister texto ={'componente de cadastro de categorias'}/>;
  }else{
    return <CategoryList texto ={'componente de Listagem de categorias'}/>;
  }
 }
  return (
    <div className="App">
        <button onClick={() =>{setVisivel(1)}}>Cadastro de produtos</button>
        <button onClick={() =>{setVisivel(2)}}>listagem de produtos</button>
        <button onClick={() =>{setVisivel(3)}}>Cadastro de categorias</button>
        <button onClick={() =>{setVisivel(4)}}>Listagem de Categorias</button>
      {seletorDeComponente()}
      </div>
  );
}

export default App;

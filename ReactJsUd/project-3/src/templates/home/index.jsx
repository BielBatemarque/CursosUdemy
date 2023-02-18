import { useState, useEffect, Component } from 'react';

const s ={
  style: {
    fontSize : '60px',
  },
};

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <p {...s}>Deu ruim =(</p>;
    }

    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if(counter > 3){
      throw new Error('que chato');
    }
  }, [counter]);

  return <div>
    <button {...s} onClick={() => setCounter((s) => s + 1)}>Clitck to increase {counter}</button>
  </div>
};

const Home = () => {
  return(
    <div {...s}>
    <MyErrorBoundary>
      <ItWillThrowError /> 
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError /> 
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError /> 
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError /> 
    </MyErrorBoundary>
    <MyErrorBoundary>
      <ItWillThrowError /> 
    </MyErrorBoundary>
    </div>
  );
};

export default Home;
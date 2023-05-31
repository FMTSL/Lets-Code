import MeuComponente from "./components/MeuComponente"

function App() {


  return (
    <div> 
      <h1>Olá Mundo!</h1>
      <MeuComponente/>
      <MeuBotao conteudo='Me Clique'/>
      <MeuBotao conteudo='Depois aqui'/>
      <MeuBotao conteudo='por fim' idade={2}/>
  
    </div>
    //Customização de componente
  )
}

function MeuBotao (props){

  return (
    <button>{props.conteudo}</button>
  )
}

export default App

import { useState } from "react";
import FimDeJogo from "./componentes/FimDeJogo";
import Tabuleiro from "./componentes/Tabuleiro";

function App() {
  const [vezDe, setVezDe] = useState('X');
  const [tabuleiro, setTabuleiro] = useState([
  // 0   1    2
    ['', '', ''], // 0
    ['', '', ''], // 1
    ['', '', '']  // 2 
  ]);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const ganhou = (v) => {
    // Testando se ganhou nas linhas
    for (let i = 0; i < 3; i++) {
      if (tabuleiro[i][0] === v && tabuleiro[i][1] === v && tabuleiro[i][2] === v) {
        return true;
      }
    }
    // Testando se ganhou nas colunas
    for (let i = 0; i < 3; i++) {
      if (tabuleiro[0][i] === v && tabuleiro[1][i] === v && tabuleiro[2][i] === v) {
        return true;
      }
    }
    // Testando as diagonais
    if (tabuleiro[0][0] === v && tabuleiro[1][1] === v && tabuleiro[2][2] === v) {
      return true;
    }
    if (tabuleiro[0][2] === v && tabuleiro[1][1] === v && tabuleiro[2][0] === v) {
      return true;
    }
    return false;
  };
  
  const empatou = () => {
    let casasVazias = 0;

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (tabuleiro[x][y] === '') {
          casasVazias++;
        }
      }
    }

    return casasVazias === 0;
  };

  const jogar = (x, y) => {
    if (tabuleiro[x][y] === '') {
      let novoTabuleiro = [...tabuleiro]; // copia o array antigo
      novoTabuleiro[x][y] = vezDe;        // modifica o array novo
      setTabuleiro(novoTabuleiro);        // diz que o estado é o array novo

      if (ganhou(vezDe)) {
        setFimDeJogo(true);
      } else if (empatou()) {
        setVezDe('Ninguém');
        setFimDeJogo(true);
      } else {
        if (vezDe === 'X') {
          setVezDe('O');
        } else {
          setVezDe('X');
        }
      }
    }
  };

  const reiniciar = () => {
    setTabuleiro([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);
    setFimDeJogo(false);

    if (vezDe === 'X') {
      setVezDe('O');
    } else {
      setVezDe('X');
    }
  };

  return (
    <>
      <h1 id="texto">
        É a vez de {vezDe}
      </h1>
      <Tabuleiro tabuleiro={tabuleiro} jogar={jogar}/>
      { fimDeJogo ? <FimDeJogo quemGanhou={vezDe} onReiniciar={() => reiniciar()}/> : '' }
    </>
  );
}

export default App;

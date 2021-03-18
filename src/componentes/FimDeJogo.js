import React from 'react'

export default function FimDeJogo({quemGanhou, onReiniciar}) {
  return (
    <>
      <h1>
        {quemGanhou} Ganhou !!!
      </h1>
      <button onClick={() => onReiniciar()}>Reiniciar o Jogo</button>    
    </>
  )
}

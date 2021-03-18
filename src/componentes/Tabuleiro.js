import React from 'react'
import Casa from './Casa'

export default function Tabuleiro({tabuleiro, jogar}) {
  return (
    <div className="center">
      <div id="tabuleiro">
        <Casa casa={tabuleiro[0][0]} onJogar={() => jogar(0, 0)}/>
        <Casa casa={tabuleiro[0][1]} onJogar={() => jogar(0, 1)}/>
        <Casa casa={tabuleiro[0][2]} onJogar={() => jogar(0, 2)}/>
        <Casa casa={tabuleiro[1][0]} onJogar={() => jogar(1, 0)}/>
        <Casa casa={tabuleiro[1][1]} onJogar={() => jogar(1, 1)}/>
        <Casa casa={tabuleiro[1][2]} onJogar={() => jogar(1, 2)}/>
        <Casa casa={tabuleiro[2][0]} onJogar={() => jogar(2, 0)}/>
        <Casa casa={tabuleiro[2][1]} onJogar={() => jogar(2, 1)}/>
        <Casa casa={tabuleiro[2][2]} onJogar={() => jogar(2, 2)}/>
      </div>
    </div>
  )
}

import React from 'react'

export default function Casa({casa, onJogar}) {
  return (
    <button className={casa === 'X' ? 'azul' : 'vermelho'} onClick={() => onJogar()}>
      {casa}
    </button>
  )
}

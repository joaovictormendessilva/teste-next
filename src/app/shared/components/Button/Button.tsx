'use client';

export function Button() {

  function sla() {
    console.log("Olá")
  }

  return <button onClick={sla}>Emitir alerta</button>
}
import { memo } from "react"

interface sonProps {
  numero: number,
  increment: (num: number) => void
}

export const Son = memo( ({ numero, increment }: sonProps) => {
  console.log('Again reloaded...')
  return (
    <button onClick={() => increment(numero)}>{ numero }</button>
  )
})

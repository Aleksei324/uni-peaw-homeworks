import { memo } from 'react'
import { stateParams } from './'

interface comp2Props {
	todo: stateParams
}

export const Comp2 = memo( ({todo}: comp2Props) => {
	return (
		<li>
			<span>{todo.description}</span>
			<button>Borrar</button>
		</li>
	)
})

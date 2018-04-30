import React from 'react';
import Pkmn from './Pkmn';

const PkmnList = ({ pokemons }) => {
	const pkmnComponent = pokemons.map((user, i) => {
		return (
			<Pkmn 
				key={i}
				id={pokemons[i].id}
				name={pokemons[i].ename}
				jname={pokemons[i].jname}

			/>
		);
	});
	return (
		<div>
			{pkmnComponent}
		</div>	
	);
}

export default PkmnList
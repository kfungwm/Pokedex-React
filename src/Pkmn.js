import React from 'react';

const Pkmn = ({name, jname, id}) => {
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='pokemon_pic' src={`https://pokemon.gameinfo.io/images/pokemon/thumbs/140/${id}.png`} />
			<div>
				<p>#{id}</p>
				<h2>{name}</h2>
				<p>{jname}</p>
				
			</div>
		</div> 
	);
}

export default Pkmn
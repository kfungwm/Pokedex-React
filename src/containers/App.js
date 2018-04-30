import React, { Component } from 'react';
import PkmnList from '../components/PkmnList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import {pokemons} from './pokemon_database';


class App extends Component {
	constructor() {
		super();
		this.state = {
			pokemons: pokemons,
			searchfield: ''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		const filteredPokemons = this.state.pokemons.filter(pokemons => {
			return pokemons.ename.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className='tc'>
				<img alt='pokedex' src='https://upload.wikimedia.org/wikipedia/it/thumb/8/83/Pok%C3%A9dex_3D.png/800px-Pok%C3%A9dex_3D.png' height='100px'/>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<PkmnList pokemons={filteredPokemons}/>
				</Scroll>		
			</div>
		);
	}


}

export default App;
import React from 'react';
import {CardList} from './components/card_list.component';
import {SearchBox} from './components/search_box.component';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({monsters : users}));
  }


handelChange = e => this.setState({searchField : e.target.value});


  render(){
  	const {monsters, searchField} = this.state;
  	const filtredMonsters = monsters.filter(monster => 
  		 monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (

    <div className="App">
    <h1>Monsters Rolodex</h1>
    <SearchBox
     placeholder='search monsters' 
     handelChange={this.handelChange}/>
    <CardList monsters={filtredMonsters}/>
    </div>
  );
  }

}

export default App;

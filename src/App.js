import React, {useState} from 'react';
import './App.css';
import Pers from './Person/Person'

const App = (props) => {
  const [person, setPerson] = useState({
    pers: [
      {name: 'Kousik', age: '47'},
      {name: 'Deepu', age: '15'},
      {name: 'Clara', age: '15'}
    ],
    otherstate: "This is another state"
  });

  const [otherState, setOtherState] = useState("This is not the previos  state");

  const changeNameHandler = (newName) => {
    setPerson({
      pers: [
        {name: newName, age: '47'},
        {name: 'Deepu', age: '15'},
        {name: 'Clara', age: '14'}
      ]
    }
    );
  }
  
  const nameChangedHandler = (event) => {
    setPerson({
      pers: [
        {name: 'Kousik', age: '47'},
        {name: event.target.value, age: '15'},
        {name: 'Clara', age: '14'}
      ]
    }
    );
  }

  const style={
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };
  
  //class App extends Component {
//  render (){
    return (    
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is really working</p>
        <button style={style}
        onClick={changeNameHandler.bind(this, 'Kousik!!!!')}>Switch Name</button>
        <Pers 
        name={person.pers[0].name} 
        age={person.pers[0].age}>
        </Pers>
        <Pers 
        name={person.pers[1].name} 
        age={person.pers[1].age}
        click={changeNameHandler.bind(this,'Kousik Das!!!')}
        changed={nameChangedHandler}>
        </Pers>
        <Pers 
        name={person.pers[2].name} 
        age={person.pers[2].age}>Butterfly</Pers>
      </div>
    );
//    return React.createElement('div',{className:'App'}, React.createElement('h1', null, 'Hi, I\'m React App!!!') );
//  }
}
export default App;



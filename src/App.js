import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet'
// import Welcome from './Components/Welcome'
// import Hello from './Components/Hello'
// import Toggle from './Components/Toggle'
import NameForm from './Components/Form';
import ListItems from './Components/ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import Example from './Components/Hook_1'

library.add(faTrash);


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
      
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const newitems=[...this.state.items, newItem];
      this.setState({
        items:newitems,
        currentItem:{
          text:"",
          key:""
        }
      })
    }

  }
  deleteItem(key){
    const filterItems = this.state.items.filter(item =>
      item.key !==key);
      this.setState({
        items:filterItems
      })
    
  }
  setUpdate(text,key){
    const items = this.state.items;
    items.map(item =>{
      if(item.key==key){
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  render(){
    return(
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
            value={this.state.currentItem.text}
            onChange={this.handleInput}></input>
            <button type="submit" >Add</button>
          
          </form>
        </header>
        <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}></ListItems>
        {/* <Example /> */}
      </div>

    )
  }
}




// function App() {
//   return (
//     // <div className="App">
//       {/* <Greet name="Bruce" heroName = "Bat Man">
//         <p>This is a children props </p>
//       </Greet>
//       <Greet name = "Clark" heroName = "Super Man">
//         <button >Action</button>
//       </Greet>
//       <Greet name = "Diana" heroName = "Wonder Womens"></Greet>
//       <Welcome name="Bruce" heroName = "Bat Man"></Welcome>
//       <Welcome name = "Clark" heroName = "Super Man"></Welcome>
//       <Welcome name = "Diana" heroName = "Wonder Womens"></Welcome>
//       <Toggle /> */}
//       // <NameForm />
//       {/* <Hello></Hello> */}
//     // </div>  
//   ); 
// }
// class App extends Component {
//   render() {
//     return(
//       <div className="App">
//         <Greet />
//         <Welcome />
//         {/* <Welcome /> */}

//       </div>

//     );
    
//   }
// }



export default App;

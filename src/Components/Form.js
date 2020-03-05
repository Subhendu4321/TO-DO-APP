import React from 'react'


// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
// }

function handleSubmit(event) {
    event.preventDefault()
    console.log('Hi',event)
    //alert('A name was submitted :'+props.NameForm.f_name+' '+ props.NameForm.m_name +' '+props.NameForm.l_name)
    // `sss${props.NameForm.f_name} ${}`
    
}

function NameForm(){
    return(
        <form className="Form Name" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" name="f_name" />
          </label><br/>
          <label>
              Middle Name:
              <input type="text" name="m_name"></input>

          </label><br/>
          <label>
              Last Name:
              <input type="text" name="l_name"></input>

          </label><br/>
          <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>

    );
}

export default NameForm
import React from 'react';
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function ListItems(props){
    const items = props.items;
    const listItems = items.map((item,index) =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text" 
                    id = {item.key} 
                    value = {item.text}
                    onChange ={
                        (e) =>{
                            console.log(e.target);
                            
                            props.setUpdate(e.target.value,item.key)
                        }
                    }
                    />
                    <span>
                        <FontAwesomeIcon className="faicons" 
                        icon='trash' 
                        onClick={ () => {
                            props.deleteItem(item.key)
                        }
                        }/>
                    </span>
                </p>
                
            </div>
        })
    return(
    <div>{listItems}</div>

    )
}

export default ListItems


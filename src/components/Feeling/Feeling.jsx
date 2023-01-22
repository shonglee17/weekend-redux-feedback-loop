import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


// function to handle the feelings portion of feedback
function Feeling(){

    let history = useHistory();//this is used to route to the next feedback portion
    const dispatch = useDispatch();//sends the user input to the store depending on the type

    const [feeling, setFeeling] = useState('');//gives the input value a place to be store before sending it to index.js
    const submitOrder = () => { //function that handles the transfer from client side to index.js(store)
        if (feeling === ''){
            alert('PLEASE INSERT A RATING!')
        }else{
        dispatch({
            type: 'SUBMIT_FEELING',//this is the route which we are calling over to the store to contain our values
            payload: feeling//this is what we are sending over to the store
        })
        history.push('/understanding');}//this is the next step/page that the user will see on the dom after dispatch
    };

    const handleSubmit = (event) => {//the event handler for when the button is clicked to initiate the transfer of the input
        event.preventDefault();//allows the user to type into the input
        submitOrder();
    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
                value= {feeling}
                placeholder="Feeling?"
                type="number"
                onChange={(event) => setFeeling(event.target.value)}
                required
            />
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Feeling
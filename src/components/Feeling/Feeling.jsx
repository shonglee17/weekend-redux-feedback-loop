import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Feeling(){

    let history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('');
    const submitOrder = () => {
        if (feeling === ''){
            alert('PLEASE INSERT A RATING!')
        }else{
        dispatch({
            type: 'SUBMIT_FEELING',
            payload: feeling
        })
        history.push('/review');}
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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
            />
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Feeling
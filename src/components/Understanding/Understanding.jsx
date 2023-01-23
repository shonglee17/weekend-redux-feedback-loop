import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


function Understanding(){
    let history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('');
    const submitOrder = () => {
        if (understanding === ''){
            alert('PLEASE INSERT A RATING!')
        }else{
        dispatch({
            type: 'SUBMIT_UNDERSTANDING',
            payload: understanding
        })
        history.push('/support');}
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitOrder();
    };

    return(
        <>
        <h3>How Well Did You Understand Today's Material?</h3>
        <form onSubmit={handleSubmit}>
            <input
                value= {understanding}
                placeholder="Rating"
                type="number"
                onChange={(event) => setUnderstanding(event.target.value)}
                required
            />
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Understanding
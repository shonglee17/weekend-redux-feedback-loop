import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


function Comments(){
    let history = useHistory();
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');
    const submitOrder = () => {
        
        dispatch({
            type: 'SUBMIT_COMMENT',
            payload: comment
        })
        history.push('/review');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitOrder();
    };

    return(
        <>
        <h3>Please Give Us Any Additional Information You Would Like !</h3>
        <form onSubmit={handleSubmit}>
            <input
                value= {comment}
                placeholder="Comments "
                type="text"
                onChange={(event) => setComment(event.target.value)}
            />
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Comments
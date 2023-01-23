import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


function Support(){
    let history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState('');
    const submitOrder = () => {
        if (support === ''){
            alert('PLEASE INSERT A RATING!')
        }else{
        dispatch({
            type: 'SUBMIT_SUPPORT',
            payload: support
        })
        history.push('/comments');}
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitOrder();
    };

    return(
        <>
        <h3>Did You Feel Supported Today?</h3>
        <form onSubmit={handleSubmit}>
            <input
                value= {support}
                placeholder="Rating"
                type="number"
                onChange={(event) => setSupport(event.target.value)}
                required
            />
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Support
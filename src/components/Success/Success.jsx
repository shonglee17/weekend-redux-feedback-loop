import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Success(){
    const history = useHistory()
    const dispatch = useDispatch()
    const resetStores=()=>{
        dispatch({
            type: 'RESET'
        })
        history.push('/')
    }

    
    return (
        <>
            <div>THANK YOU!</div>
            <button onClick={resetStores}>Leave New Feedback</button>
        </>
    )
}

export default Success
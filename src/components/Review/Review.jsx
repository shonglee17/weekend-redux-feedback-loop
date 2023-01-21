import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Review(){

    const history = useHistory();
    let feeling;
    let understanding;
    let support;
    let comment;

    
    let feelings = useSelector((store) => store.feelingsRating)
    feelings.map((x)=>{
        return feeling = x.feeling
    })

    let understandings = useSelector((store) => store.understandingRating)
    understandings.map((x)=>{
        return understanding = x.understanding
    })

    let supports = useSelector((store) => store.supportRating)
    supports.map((x)=>{
        return support = x.support
    })

    let comments = useSelector((store) => store.comments)
    comments.map((x)=>{
        return comment = x.comment
    })


    
    const handleClicks = () =>{
        handleCheckout()
    }
    const handleCheckout = () =>{
        axios({
            method: 'POST',
            url: '/prime_feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comment,

            }
          }).then ((response) => {
            alert('Order Confirmed!')
            history.push('/success')
          }).catch((error) => {
            console.log('useEffect failed:', error);
          })
     
    }
    
    
    return (
        <>  
            <div>Feelings :{feeling}</div>
            <div>Understanding : {understanding}</div>
            <div>Support : {support}</div>
            <div>Comments : {comment}</div>
            <button onClick={handleClicks}>SUBMIT</button>
        </>
    )
}

export default Review
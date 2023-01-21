import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function Review(){

    const history = useHistory();
    let chill;
    let feelings = useSelector((store) => store.feelingsRating)
    feelings.map((x)=>{
        return chill = x.feeling
    })
    console.log(chill);
    const handleClicks = () =>{
        handleCheckout()
    }
    const handleCheckout = () =>{
        axios({
            method: 'POST',
            url: '/prime_feedback',
            data: {
                feeling: chill,
                understanding: 1,
                support: 1,
                comments: 'hi',

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
            <div>Feelings :{feelings.map((num)=>{return (num.feeling)})}</div>
            <button onClick={handleClicks}>SUBMIT</button>
        </>
    )
}

export default Review
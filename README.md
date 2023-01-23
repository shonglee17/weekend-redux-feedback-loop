

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Requirements: 
    The feedbacks cannot be stored in the database until all fields have been filled and submitted via Review page.
    Feedbacks must be stored using Redux
    Stores will use an empty array as a default state


Objective : 
    1. Allow the user to send feedback via feelings, understanding, support, and comment.
    2. Give the user a chance to look at their feedback via a Review page.
    3. When the user has filled out all pages of the feedback, send the feedback to the database.
    4. After sending the feedback to the database , allow the user to send an additional feedback if they choose to.

Solution 1: 
    -Inputs have been set up for feelings, understanding, support, and comments.
    -Inputs are dispatched on click to be stored in the corresponding reducers.
    -User will also be routed to the next portion of the feedbacks via useHistory()

Solution 2:
    -Using the useSelector() we import information from the store and render it onto the dom. 
    
Solution 3: 
    -On submit, we send the information to the database using our POST route to store the user's feedback

Solution 4:
    -If the user wants to leave additional feed back , we clear out the store(s) with a RESET type and set the state to an empty array.




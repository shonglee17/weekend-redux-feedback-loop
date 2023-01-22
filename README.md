

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Objective : 
    1. Allow the user to send feedback via feelings, understanding, support, and comment.
    2. Give the user a chance to look at their feedback via a Review page.
    3. When the user has filled out all pages of the feedback, send the feedback to the database.
    4. After sending the feedback to the database , allow the user to send an additional feedback if they choose to.

Problem: 
    The feedbacks cannot be stored in the database until all fields have been filled and submitted via Review page.
    Feedbacks must be stored using Redux
    Stores will use an empty array as a default state

Solution 1: 
    -Inputs have been set up for feelings, understanding, support, and comments.
    -Inputs are dispatched on click to be stored in the corresponding reducers.
    -User will also be routed to the next portion of the feedbacks via useHistory()





# React Pomodoro Clock

This project is designed as a **freeCodeCamp** certification project for **Front End Libraries** module.

Created using [Create React App](https://github.com/facebook/create-react-app) boilerplate.
  
Click [here](https://leviante.github.io/pomodoro-clock/) to start using the clock.

## To see the code

Check out `src` folder to see the written files.

- `components` : Contains components and their stylesheets that are used in this project.

Since there quite a few reused components in this project, the file directory looks a bit complicated compared to other certification projects.

Rest of the files inside are part of the boilerplate, thus I just changed their content to tailor them to this specific project.

## How To Use

1. Navigate to the webpage provided above.
2. There are **2** main controls, one for **session** length, other for **break length**. You will see the updated session length as you change it.
3. Simply adjust these length values to your liking.
4. Press the **start** button located in the bottom left corner.
5. The timer will start the countdown based on chosen values. When the session countdown ends, it will **alarm the user** that it is over and will switch to break countdown. When the break countdown ends, the same thing will happen and the timer will continue to cycle through these values.
6. To reset the application, press the **reset** button located in the bottom right corner.

*Additional info*: It is possible to change the values **while the timer is working**, if you change the values, timer will continue it's cycle based on the new values.

*For example*, while the timer is counting the session, if user changes the session length to something different, the timer will use the new value on the next turn.

// const Student = () => {
//     return (
//         <ul>
//             <li>Nickname: Ada</li>
//             <li>Email: ada@dev.org</li>
//         </ul>
//     );
// };

// export default Student;


// ################# Update from Props 2.Props
// # Student: Reading name and email
// Add props as an expected parameter for the Student component function
// Modify her code to embed props.name and props.email wherever they should be rendered

// const Student = (props) => {
//     return (
//         <ul>
//             <li>Nickname: {props.name}</li>
//             <li>Email: {props.email}</li>
//         </ul>
//     );
// };

// export default Student;


// ################# Update from Props 3.PropTypes
// # PropTypes in Sofia's Student Component
// # She defines:
// # name is a string, and it is required
// # email is a string, and it is required
// import PropTypes from "prop-types";



// const Student = (props) => {
//   return (
//     <ul>
//       <li>Nickname: {props.name}</li>
//       <li>Email: {props.email}</li>
//     </ul>
//   );
// };

// Student.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
// };

// export default Student;



// State and Event Handling 2. Create isPresent State in Student
// In src/components/Student.js, Sofia adds these two lines to create isPresent state:
// import { useState } from 'react';
// import PropTypes from 'prop-types';

// // 5. Modify the JSX to Use Conditional CSS Classes
// import './Student.css';


// const Student = (props) => {
//     // This line is in the Student component function, before the return statement:
//     const [isPresent, setIsPresent] = useState(false);

//     // 4. Create the Event Handler
//     // Sofia now creates the event handler, which updates the isPresent state. 
//     const togglePresence = () => {
//         setIsPresent(!isPresent);
//     };

//     //  Refactor: function-passing style call to setIsPresent.
//     // const togglePresence = () => {
//     //     setIsPresent(isPresent => !isPresent);
//     // };

//     // Then, she creates a variable that holds the name of the (CSS) classes. 
//     // She uses a ternary to express this. If isPresent is true, the variable should be 'green'. 
//     // If isPresent is false, it should be 'red'.

//     const nameColor = isPresent ? 'green' : 'red';

//     return (
//         <div>
//             <ul>
//                 <li className={nameColor}>Nickname: {props.name}</li>
//                 <li>Email: {props.email}</li>
//             </ul>
//             {/* 3. Create the Toggle Presence Button in Student */}
//             {/* <button>Toggle if {props.name} is present</button> */}
//             {/* Attach the Event Handler to the Button */}
//             <button onClick={togglePresence}>Toggle if {props.name} is present</button>
//         </div>
//     );
// };

// Student.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired
// };

// export default Student;


// Lifting State Up 2. Single Source of Truth
// Update PropTypes
// Use isPresent as a prop in Student
// import { useState } from 'react';
import PropTypes from 'prop-types';
import './Student.css';

const Student = (props) => {
    // ######################### Lifting State Up 4. Lifting State Up
    // # Creating a New onClick Handler in Student
    // # Registering attendanceButtonClicked with the Attendance Button
    const attendanceButtonClicked = () => {
        // Invoke the function passed in through the prop named "onPresenceToggle"
        // This function refers to the toggleStudentPresence function in App
        props.onPresenceToggle(props.id);
    };


    const nameColor = props.isPresent ? 'green' : 'red';

    return (
        <div>
            <ul>
                <li className={nameColor}>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>
            {/* Registering attendanceButtonClicked with the Attendance Button */}
            <button onClick={attendanceButtonClicked}>Toggle if {props.name} is present</button>
        </div>
    );
};


Student.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isPresent: PropTypes.bool.isRequired,
    onPresenceToggle: PropTypes.func.isRequired,
};


export default Student;

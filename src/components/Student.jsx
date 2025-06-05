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
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <ul>
      <li>Nickname: {props.name}</li>
      <li>Email: {props.email}</li>
    </ul>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Student;
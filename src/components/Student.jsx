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

const Student = (props) => {
    return (
        <ul>
            <li>Nickname: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
    );
};

export default Student;


// Different Ways: define the StudentList component like
// const StudentList = () => {
//   return <h2>Student List</h2>;
// };

// const StudentList = () => {
//   return (
//     <h2>Student List</h2>
//   );
// }

// // const StudentList = () => {
// //   const studentListHeader = <h2>Student List</h2>;
// //   return studentListHeader;
// // }

// // Export the Component
// export default StudentList;

// import './StudentList.css';
// import Student from './Student';
//  modify her StudentList component to include some classes with className:
// const StudentList = () => {
//     return (
//         <section>
//             <h2 className="student-list__heading">Student List</h2>
//             <ul className="student-list">
//                 <li>Student A</li>
//                 <li>Student B</li>
//                 <li>Student C</li>
//             </ul>
//         </section>
//     )
// }

// We can store our CSS class names in variables, then inject them into our JSX as follows:
// const StudentList = () => {
//     const headingClass = 'student-list__heading';
//     const listClass = 'student-list';

//     return (
//         <section>
            // <h2 className={headingClass}>Student List</h2>
//             <ul className={listClass}>
//                 <li>Student A</li>
//                 <li>Student B</li>
//                 <li>Student C</li>
//             </ul>
//         </section>
//     );
// };

// export default StudentList;

// ################# Update from Props 1. Nested Components
// import './StudentList.css';
// import Student from './Student';

// // Imports, exports, and className attributes have been omitted from this code snippet for clarity.
// // StudentList is container component include presentational component
// const StudentList = () => {
//     const headingClass = 'student-list__heading';
//     const listClass = 'student-list';
//     return (
//         <section>
//             {/* <h2>Student List</h2> */}
//             {/* <ul> */}
        
//             <h2 className={headingClass}>Student List</h2>
//             <ul className={listClass}>
//                 {/* Student is presentational componenet */}
//                 <li><Student></Student></li> 
//                 <li><Student></Student></li>
//                 <li><Student></Student></li>
//             </ul>
//         </section>
//     );
// };

// export default StudentList;


// ################# Update from Props 2.Props
// StudentList Passing In name and email
// Sofia wants to pass a name and an email to each Student component. 
// Therefore, she adds two props: name and email.
import './StudentList.css';
import Student from './Student';

// const StudentList = () => {
//     const headingClass = 'student-list__heading';
//     const listClass = 'student-list';
//     return (
//         <section>
//             {/* <h2>Student List</h2>
//             <ul> */}
//             <h2 className={headingClass}>Student List</h2>
//             <ul className={listClass}>
//                 <li><Student name="Ada" email="ada@dev.org"></Student></li>
//                 <li><Student name="Soo-ah" email="sooah@dev.org"></Student></li>
//                 <li><Student name="Chrissy" email="chrissy@dev.org"></Student></li>
//                 {/* Undefined Properties Are undefined */}
//                 <li><Student></Student></li> 
//             </ul>
//         </section>
//     );
// };

// Rendering Arrays of JSX Elements
// const StudentList = () => {
//     const studentComponents = [
//         <li><Student name="Ada" email="ada@dev.org"></Student></li>,
//         <li><Student name="Soo-ah" email="sooah@dev.org"></Student></li>,
//         <li><Student name="Chrissy" email="chrissy@dev.org"></Student></li>
//     ];

//     return (
//         <section>
//             <h2>Student List</h2>
//             <ul>
//                 {studentComponents}
//             </ul>
//         </section>
//     );
// };

// Iterating Over Data Structures
// const StudentList = () => {
//     const studentData = [
//         {
//             nameData: 'Ada',
//             emailData: 'ada@dev.org'
//         },
//         {
//             nameData: 'Soo-ah',
//             emailData: 'sooah@dev.org'
//         },
//         {
//             nameData: 'Chrissy',
//             emailData: 'chrissy@dev.org'
//         }
//     ];

//     // The function call studentData.map(...) sets studentComponents to an array of JSX elements. 
//     const studentComponents = studentData.map(student => {
//         return (
//             <li><Student name={student.nameData} email={student.emailData}></Student></li>
//         );
//     });

//     return (
//         <section>
//             <h2>Student List</h2>
//             <ul>
//                 {studentComponents}
//             </ul>
//         </section>
//     );
// };

// export default StudentList;


// Reading props in StudentList
const StudentList = (props) => {
    // const studentComponents = props.students.map(student => {
    //     return (
    //         <li><Student name={student.nameData} email={student.emailData}></Student></li>
    //     );
    // });

    // # Addressing "Warning: Each child in a list should have a unique "key" prop."
    // One possible fix for the key prop warning
    // We could change our map function in StudentList to this:
    const studentComponents = props.students.map((student, index) => {
    return (
        <li key={index}>
            <Student name={student.nameData} email={student.emailData}></Student>
        </li>
    );
});

    return (
        <section>
            <h2>Student List</h2>
            <ul>
                {studentComponents}
            </ul>
        </section>
    );
};

export default StudentList;

// // ################# Update from Props 3.PropTypes
// const StudentList = () => {
//     const studentData = [
//         {
//             nameData: 'Ada',
//             // emailData: 'ada@dev.org'
//         },
//         {
//             nameData: 'Soo-ah',
//             emailData: 'sooah@dev.org'
//         },
//         {
//             nameData: 'Chrissy',
//             emailData: 'chrissy@dev.org'
//         }
//     ];

//     // The function call studentData.map(...) sets studentComponents to an array of JSX elements. 
//     const studentComponents = studentData.map(student => {
//         return (
//             <li><Student name={student.nameData} email={student.emailData}></Student></li>
//         );
//     });

//     return (
//         <section>
//             <h2>Student List</h2>
//             <ul>
//                 {studentComponents}
//             </ul>
//         </section>
//     );
// };

// export default StudentList;
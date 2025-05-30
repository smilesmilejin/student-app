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

import './StudentList.css';

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
const StudentList = () => {
    const headingClass = 'student-list__heading';
    const listClass = 'student-list';

    return (
        <section>
            <h2 className={headingClass}>Student List</h2>
            <ul className={listClass}>
                <li>Student A</li>
                <li>Student B</li>
                <li>Student C</li>
            </ul>
        </section>
    )
}

export default StudentList;
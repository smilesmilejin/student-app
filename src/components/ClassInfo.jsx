// # Define a function named ClassInfo
// # Export ClassInfo
// const ClassInfo = () => {
//   return (
//     <section>
//       <h2>Class Information</h2>
//       <ul>
//         <li>Name: Team Semicolons</li>
//         <li>Number of members: 30</li>
//       </ul>
//     </section>
//   );
// };

// export default ClassInfo;


// ################# Update from Props 2.Props
// In ClassInfo, begin to accept props. 
// This component should read this new prop, and replace 30 with the actual number of students.
const ClassInfo = (props) => {
    return (
        <section>
            <h2>Class Information</h2>
            <ul>
                <li>
                    Name: Team Semicolons
                </li>
                <li>
                    Number of members: {props.memberCount}
                </li>
            </ul>
        </section>
    );
};
export default ClassInfo;
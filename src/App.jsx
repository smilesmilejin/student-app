
// import './App.css';

// import './index.css';
// Import the Component
// the paths ./path/to/file and path/to/file are equivalent. 
// Local Component Imports Must Begin with a Path Character
//  the path must begin with a "path" character, such as ./
// import StudentList from './components/StudentList';

// // function App() {
// //   return (
// //     <main>
// //       <h1>Attendance</h1>
// //       <StudentList></StudentList>
// //     </main>
// //   );
// // }

// // export default App;

// function App() {
//   return (
//     <main>
//       <h1>Attendance</h1>
//       Here&apos;s the first rendered student list:
//       <StudentList></StudentList>
//       Here&apos;s the second rendered student list:
//       <StudentList></StudentList>
//     </main>
//   );
// }

// export default App;

// import ClassInfo from './components/ClassInfo';

// function App() {
//   return (
//     <main>
//       <h1>Attendance</h1>
//       <ClassInfo></ClassInfo>
//       <StudentList></StudentList>
//     </main>
//   );
// }

// export default App;


// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;


// # More Practice: Passing studentData From App to StudentList

// // Sending props From App
// // The App component can define studentData, and then send it as a property.
// import './index.css';
// import ClassInfo from './components/ClassInfo';
// import StudentList from './components/StudentList';

// function App() {
//   const studentData = [
//     {
//       nameData: 'Ada',
//       emailData: 'ada@dev.org'
//     },
//     {
//       nameData: 'Soo-ah',
//       emailData: 'sooah@dev.org'
//     },
//     {
//       nameData: 'Chrissy',
//       emailData: 'chrissy@dev.org'
//     }
//   ];

//   return (
//     <main>
//       <h1>Attendance</h1>
//       {/* In App, create a prop to send to ClassInfo. 
//       The prop's value should be some data related to the number of students in studentData. */}
//       <ClassInfo memberCount={studentData.length}></ClassInfo>
//       <StudentList students={studentData}></StudentList>
//     </main>
//   );
// }

// export default App;


// Lifting State Up 2. Single Source of Truth
// structuring our code so that data is managed in one place.
// Moving isPresent From Student to App

// Lifting State Up 3. Passing Down Event Handlers
// Refactoring Opportunity: Moving large initial values out of components
import { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  // Refactoring Opportunity: Moving large initial values out of components
  const kInitialStudentData = [
    {
      id: 1,
      nameData: 'Ada',
      emailData: 'ada@dev.org',
      isPresentData: false,
    },
    {
      id: 2,
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org',
      isPresentData: false,
    },
    {
      id: 3,
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org',
      isPresentData: true,
    }
  ];
  const [studentData, setStudentData] = useState(kInitialStudentData);

  // ///////////////////////// 1. 
  // // Create a Function to Toggle Student Presence in App
  // const toggleStudentPresence = (studentId) => {
  //   // calculate the updated student data by finding the student that matches
  //   // the passed id, making a copy with object spreading, then overwriting
  //   // the presence value with its inverse
  //   const students = studentData.map(student => {
  //     if (student.id === studentId) {
  //       // this was the toggled student, so make a new record with the updated
  //       // presence value
  //       return { ...student, isPresentData: !student.isPresentData }; // In the code above, we use object spread notation to create a copy of the student record, and combined that with object shorthand notation to update the isPresentData field of the copy. 
  //       // Click here to see the long hand version of the code above
  //       // return { ...student, isPresentData: !student.isPresentData };
  //       // Begin
  //       // const updatedStudent = {
  //       //   id: student.id,
  //       //   nameData: student.nameData,
  //       //   emailData: student.emailData,
  //       //   isPresentData: student.isPresentData,
  //       // };

  //       // updatedStudent.isPresentData = !student.isPresentData;

  //       // return updatedStudent;
  //       // // End

  //     } else {
  //       // this was not the student who was toggled, so we can use the existing
  //       // data in the new student array
  //       return student;
  //     }
  //   });

  //   // uses value-passing style to update the student data, but could be
  //   // refactored to use function-passing style
  //   setStudentData(students);
  // };

  // ///////////////////////// 2. Refactoring Opportunity: Using Function-Passing State Updates
  // Pass This Function to StudentList

    // ///////////////////////// 3. Passing Down Event Handlers
  // App needs a function that updates the student data, 
  // because the student data is managed in App's state. 
  // In order to use this function, we need to pass this function to StudentList and Student through props.


  // This function creates an array students, 
  // which contains objects of student data. 
  // It updates studentData in state by invoking setStudentData.
    const toggleStudentPresence = (studentId) => {
      setStudentData(students => {
        return students.map(student => {
          if (student.id === studentId) {
            return { ...student, isPresentData: !student.isPresentData };
          } else {
            return student;
          }
        });
      });
    };


  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList
        students={studentData}
        onStudentPresenceToggle={toggleStudentPresence} // Pass This Function to StudentList
      ></StudentList>
    </main>
  );
}

export default App;
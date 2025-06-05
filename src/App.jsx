
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

// Sending props From App
// The App component can define studentData, and then send it as a property.
import './index.css';
import ClassInfo from './components/ClassInfo';
import StudentList from './components/StudentList';

function App() {
  const studentData = [
    {
      nameData: 'Ada',
      emailData: 'ada@dev.org'
    },
    {
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org'
    },
    {
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org'
    }
  ];

  return (
    <main>
      <h1>Attendance</h1>
      {/* In App, create a prop to send to ClassInfo. 
      The prop's value should be some data related to the number of students in studentData. */}
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
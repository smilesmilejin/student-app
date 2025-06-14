// Handling Forms 1. Controlled Forms
import { useId } from 'react';
import { useState } from 'react';

const NewStudentForm = () => {
    // The id and for attributes enable us to associate a <label> element with its corresponding <input> element. 
    // The name attribute on an <input> element is primarily used during traditional HTML form submission. 
    // An id attribute is required if we want to associate a label with the input
    // React 18 introduced a new hook for generating unique IDs. We can use this hook to generate a unique ID for our controlled form, and use that to build a unique ID for each input on the form.
    const inputId = useId();

    // New Piece of State: An Object of formFields
    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
    });

    // Event Handling To Update formFields
    // Sofia uses spread syntax for a quick way to clone the original formFields object. Each event handler should add a specific key-value pair. 
    // handleNameChange adds the key-value pair name: event.target.value, 
    // while handleEmailChange adds email: event.target.value.

    // Cloning the State Object Lets React See the Change
    // If she doesn't clone the current state to get a new object, React won't notice that the state has changed, and won't re-render the component.

    const handleNameChange = (event) => {
        setFormFields({
            ...formFields,
            name: event.target.value,
        });
    };

    const handleEmailChange = (event) => {
        setFormFields({
            ...formFields,
            email: event.target.value,
        });
    };

    // formFields is an object, she can use dot notation to access the name and email values from the object stored in state.
    return (
        <form>
            <div>
                <label htmlFor="fullName">Name:</label>
                <input
                    id="fullName"
                    name="fullName"
                    value={formFields.name}
                    onChange={handleNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input name="email"
                    id="email"
                    value={formFields.email}
                    onChange={handleEmailChange} />
            </div>
            <input
                type="submit"
                value="Add Student" />
        </form>
    );
};

export default NewStudentForm;


// // Refactor Version: Refactoring Opportunity: Combining Multiple Change Handlers into One
// import { useState } from 'react';

// const NewStudentForm = () => {

//     const [formFields, setFormFields] = useState({
//         name: '',
//         email: '',
//     });

//     // two event handlers that can be combined into a single event handler
//     // const handleNameChange = (event) => {
//     //     setFormFields({
//     //         ...formFields,
//     //         name: event.target.value,
//     //     })
//     // };

//     // const handleEmailChange = (event) => {
//     //     setFormFields({
//     //         ...formFields,
//     //         email: event.target.value,
//     //     })
//     // };

//     const handleChange = (event) => {
//         setFormFields({ ...formFields, [event.target.name]: event.target.value });
//     };

//     return (
//         <form>
//             <div>
//                 {/* the for attribute is now `name` instead of `fullName` for consistency */} 
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     {/* name attribute is changed to `name` instead of `fullName` 
//                     and the id attribute is changed too for consistency*/} 
//                     id="name"
//                     name="name"
//                     value={formFields.name}
//                     onChange={handleChange} />
//             </div>
//             <div>
//                 <label htmlFor="email">Email:</label>
//                 <input 
//                     id="email"
//                     name="email"
//                     value={formFields.email}
//                     onChange={handleChange} />
//             </div>
//             <input
//                 type="submit"
//                 value="Add Student" />
//         </form>
//     );
// };

// export default NewStudentForm;
import { useState } from 'react';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  console.log(firstName, lastName)

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Thank you, ${firstName}. Thank you for your interest! I will be in touch shortly.`);
    setFirstName('');
    setLastName('');
  };

  return (
    <div className="container text-center" >
      <h2 style={{color:'#f6f6df'}}>
        Reach out to me with any questions you may have, or just to get in touch! {firstName} {lastName}
      </h2>
      <form className="form" onSubmit={handleFormSubmit} style={{display: 'flex', flexDirection: 'column', margin: 'auto', maxWidth: '400px', }}>
        <input
          value={firstName}
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
        />
          <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
        />
          <input
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          type="phone"
          placeholder="Phone"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

import { useState } from 'react';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  console.log(firstName, lastName)

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Thank you for your interest, ${firstName}! I will be in touch shortly.`);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="container text-center formDiv" >
      <h2>
        Reach out to me with any questions you may have, or just to get in touch!
      </h2>
      <form className="form" onSubmit={handleFormSubmit} >
        <input
          value={firstName}
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
          required='First name is required!'
        />
        <input
          value={lastName}
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          required='First name is required!'
        />
          <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          required='Email is required!'
        />
          <input
          value={phone}
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          type="phone"
          placeholder="Phone"
        />
          <textarea
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help you?"
          required='Please tell us how we can help you!'
        />
        <button className="formButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

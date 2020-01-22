import React, { useState } from 'react';

import Member from './components/Member';




function App() {
  const [members, setNewMembers]= useState([
    {
      name: "Pamela",
      email: "pbeasley@dundermiff.com",
      role: "Receptionist"
}
]);

  return (
    <div className="App">
    <h1> Team Members </h1>
  
        <Member members={members} />
    </div>
  );
}

export default App;

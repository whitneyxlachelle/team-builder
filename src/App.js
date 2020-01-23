import React, { useState } from 'react';

import Member from './components/Member';
import MemberForm from './components/MemberForm';

function App() {
  const [members, setNewMembers]= useState([
    {
      name: "Pamela",
      email: "pbeasley@dundermiff.com",
      role: "Receptionist"
}
]);

const addNewMember = member => {
  setNewMembers([...members, member])
}

  return (
    <div className="App">
    <h1>Team Members</h1>
        <Member members={members} />
        <MemberForm addNewMember={addNewMember}/>
    </div>
  );
}

export default App;

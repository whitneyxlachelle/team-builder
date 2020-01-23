import React, { useState } from 'react';

const MemberForm = props => {
    console.log(props);
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const changeHandler = e => {
        setMember({ ...member, [e.target.name]: e.target.value })
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: "" })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={changeHandler}
                value={member.name}
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={changeHandler}
                value={member.email}
            />

            <label htmlFor="role">Role</label>
            <input
                id="role"
                type="text"
                name="role"
                onChange={changeHandler}
                value={member.role}
            />
            <button type="submit">Add Member</button>
        </form>
    )
}
export default MemberForm;
import React, { useState } from 'react'
import { useContext } from 'react';
import { UserData } from './contexts/GlobalContext';

export default function Name() {
    let { setName } = useContext(UserData);
    const [newName, setNewName] = useState("")

    const handleClick = () => {
        setName(newName);
        setNewName("")
    }
    return (
        <>
            <input type="text" placeholder='write new name...' value={newName} onChange={(e) => { setNewName(e.target.value) }} />
            <button onClick={handleClick}>Chnage Name</button>
        </>
    )
}

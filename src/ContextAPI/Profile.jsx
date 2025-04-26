import React from 'react';
import { useContext } from 'react';
import { UserData } from './contexts/GlobalContext';

export default function Profile() {
    let { name, age } = useContext(UserData)
    return (
        <div>My name is {name}({age})</div>
    )
}

import React from 'react'


export default function Footer({ view }) {
    return (
        <div className={`p-3 fixed bottom-0 w-[80%] ${view === 'students' ? 'bg-green-300' : 'bg-blue-300'}`}>Footer {view}</div>
    )
}


import React from 'react';

const signOutBtn = {
    width: '100px',
}


const Navigation = () => {
    return (
        <nav className='flex justify-end-ns pa3'>
            <button className='btn btn-3 br2 pa2 shadow-1' style={signOutBtn}>
                <p>Sign out</p>
            </button>
        </nav>
    )
}

export default Navigation;
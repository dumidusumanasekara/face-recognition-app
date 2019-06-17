import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
                <div>
                    <div className='flex justify-center'>
                        <p className='f3 w-40'>
                            {'This Magic Brain will detect faces in your pictures. Give it a try'}
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-40 shadow-4 inputContainer' >
                        <input className='bdr pa3 w-70 mr2 br2 shadow-1' type='text' />
                        <button className='btn btn-4 w-30 link br2 shadow-1'>Detect</button>
                        </div>
                    </div>
                </div>
    );
}

export default ImageLinkForm
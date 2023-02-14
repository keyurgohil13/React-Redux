import React from 'react';
import './Counter.css'

function Counter() {
    return (
        <>
            <section className='py-20'>
                <div className='container'>
                    <div className='row justify-content-center text-center'>

                        <div className='w-2'>
                            <button> + </button>
                        </div>
                        <div className='w-3'>
                            <h3>
                                0
                            </h3>
                        </div>
                        <div className='w-2'>
                            <button> - </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter
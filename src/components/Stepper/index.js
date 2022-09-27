import React, { useState } from 'react';
import '../style.css';

import {FaCheck} from 'react-icons/fa';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

function Stepper() {
    const [step,setStep] = useState(1);
    const [active,setActive] = useState(1);
    const [isSubmit,setSubmit] = useState(false);

    return (
        <div className='stepper'>
            {
                isSubmit
                ? ''
                : <div className='navigator'>
                    <div className='nav-tab'>
                        <label className={active === 1 ? 'active-label' : ''}>Personal Details</label>
                        <div className={`nav-item ${active === 1 ? 'active' : ''} ${active > 1 ? 'success' : ''}`}>
                            {active > 1 ? <FaCheck /> : 1}
                        </div>
                    </div>
                    <div className='nav-tab'>
                        <label className={active === 2 ? 'active-label' : ''}>Address to Deliver</label>
                        <div className={`nav-item ${active === 2 ? 'active' : ''} ${active > 2 ? 'success' : ''}`}>
                            {active > 2 ? <FaCheck /> : 2}
                        </div>
                    </div>
                    <div className='nav-tab'>
                        <label className={active === 3 ? 'active-label' : ''}>Add Payment Methods</label>
                        <div className={`nav-item ${active === 3 ? 'active' : ''} ${active > 3 ? 'success' : ''} last`}>
                            {active > 3 ? <FaCheck /> : 3}
                        </div>
                    </div>
                </div>
            }
            {
                isSubmit
                ? <div className='greet'>
                    <FaCheck className='iconbg'></FaCheck>
                    <h1>Submitted Successfully</h1>
                </div>
                : <div className='form-wrapper'>
                    {
                        active === 1
                        ? <Form1 step={step} setStep={setStep} setActive={setActive}/>
                        : active === 2
                            ? <Form2 step={step} setStep={setStep} setActive={setActive}/>
                            : <Form3 step={step} setStep={setStep} setActive={setActive} setSubmit={setSubmit}/>
                    }
                </div>
            }
        </div>
    )
}

export default Stepper
import React, { useState } from 'react'

function Form1(props) {
    const {step,setStep,setActive} = props;

    const [data,setData] = useState({
        email : '',
        username: '',
        dob:'',
        phone:''
    });
    const [hasErr,setHasErr] = useState(true);

    const [mailErr,setMailErr] = useState(false);
    const [nameErr,setNameErr] = useState(false);
    const [dobErr,setDobErr] = useState(false);
    const [phoneErr,setPhoneErr] = useState(false);

    const validateData = (key) => {
        if(key === 'email'){
            let email = data.email;
            console.log(typeof(email)+' '+email.length);
            if(email.length < 3){
                setMailErr(true);
            }else{
                setMailErr(false);
            }
        }else if(key === 'username'){
            if(data.username.length < 3){
                setNameErr(true);
            }else{
                setNameErr(false);
            }
        }else if(key === 'dob'){
            let date = new Date(data.dob);
            let year = date.getFullYear();
            console.log(year);
            if(year > 2010){
                setDobErr(true);
            }else{
                setDobErr(false);
            }
        }else if(key === 'phone'){
            if(data.phone.length < 12){
                setPhoneErr(true);
            }else{
                setPhoneErr(false);
            }
        }

        setHasErr(mailErr || nameErr || dobErr || phoneErr);
    }

    const handleData = (e) => {
        setData({...data,[e.target.name]: e.target.value});
        validateData(e.target.name);
    }

    //const handleChange = (event) => {
    //    setValues({ ...values, [event.target.name]: event.target.value });
    //};

    return (
        <div className='form'>
            <div className='flex-rc'>
                <div className='input-comp'>
                    <label>Email</label>
                    <input type='email' className={mailErr ? 'error-input' : ''} name='email' value={data.email} placeholder='John@gmail.com' onChange={handleData}></input>
                    {mailErr ? <span className='error'>Please recheck the mail.</span> : ''}
                </div>
                <div className='input-comp'>
                    <label>Username</label>
                    <input type='text' className={nameErr ? 'error-input' : ''} name='username' value={data.username} placeholder='John Doe' onChange={handleData}></input>
                    {nameErr ? <span className='error'>Please recheck the username.</span> : ''}
                </div>
            </div>
            <div className='flex-rc'>
                <div className='input-comp'>
                    <label>Date of Birth</label>
                    <input type='date' className={dobErr ? 'error-input' : ''} name='dob' value={data.dob} placeholder='20/09/2001' onChange={handleData}></input>
                    {dobErr ? <span className='error'>Please enter age of minimum 15.</span> : ''}
                </div>
                <div className='input-comp'>
                    <label>Phone Number</label>
                    <input type='phone' className={phoneErr ? 'error-input' : ''} name='phone' value={data.phone} placeholder='+918885585495' onChange={handleData}></input>
                    {phoneErr ? <span className='error'>Please enter 10 digit number.</span> : ''}
                </div>
            </div>
            <button className={`button ${hasErr ? 'disabled' : ''}`} disabled={hasErr ? true : false} onClick={
                () => {
                    setStep(step+1);
                    setActive(step+1);
                }
            }>Next</button>
        </div>
    )
}

export default Form1
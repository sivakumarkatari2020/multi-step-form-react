import React, { useState } from 'react'

function Form3(props) {
    const {step,setStep,setActive,setSubmit} = props;

    const [data,setData] = useState({
        card : '',
        cvv: '',
        expiry:'',
        amount:''
    });
    const [hasErr,setHasErr] = useState(true);

    const [cardErr,setcardErr] = useState(false);
    const [cvvErr,setcvvErr] = useState(false);
    const [expiryErr,setexpiryErr] = useState(false);
    const [amountErr,setamountErr] = useState(false);

    const validateData = (key) => {
        if(key === 'card'){
            if(data.card.length < 12 && data.card.length > 15){
                setcardErr(true);
            }else{
                setcardErr(false);
            }
        }else if(key === 'cvv'){
            if(data.cvv.length !== 2){
                setcvvErr(true);
            }else{
                setcvvErr(false);
            }
        }else if(key === 'expiry'){
            console.log(typeof(data.expiry));
            if(Number(data.expiry.substring(3,4)) !== 2){
                setexpiryErr(true);
            }else{
                setexpiryErr(false);
            }
        }else if(key === 'amount'){
            if(Number(data.amount) <= 100){
                setamountErr(true);
            }else{
                setamountErr(false);
            }
        }

        setHasErr(cardErr || cvvErr || expiryErr || amountErr);
    }

    const handleData = (e) => {
        setData({...data,[e.target.name]: e.target.value});
        validateData(e.target.name);
    }

    return (
        <div className='form'>
            <div className='flex-rc'>
                <div className='input-comp'>
                    <label>Card Number</label>
                    <input type='text' className={cardErr ? 'error-input' : ''} name='card' value={data.card} placeholder='0000 0000 0000 0000' onChange={handleData}></input>
                    {cardErr ? <span className='error'>Please recheck the card number.</span> : ''}
                </div>
                <div className='input-comp'>
                    <label>CVV Number</label>
                    <input type='text' className={cvvErr ? 'error-input' : ''} name='cvv' value={data.cvv} placeholder='123' onChange={handleData}></input>
                    {cvvErr ? <span className='error'>Enter valid CVV number.</span> : ''}
                </div>
            </div>
            <div className='flex-rc'>
                <div className='input-comp'>
                    <label>Expiry</label>
                    <input type='text' className={expiryErr ? 'error-input' : ''} name='expiry' value={data.expiry} placeholder='10/24' onChange={handleData}></input>
                    {expiryErr ? <span className='error'>Please enter valid expiry.</span> : ''}
                </div>
                <div className='input-comp'>
                    <label>Amount</label>
                    <input type='text' className={amountErr ? 'error-input' : ''} name='amount' value={data.amount} placeholder='' onChange={handleData}></input>
                    {amountErr ? <span className='error'>Please make a payment of least 100.</span> : ''}
                </div>
            </div>
            <button className={`button ${hasErr ? 'disabled' : ''}`} disabled={hasErr ? true : false} onClick={
                () => {
                    setStep(step+1);
                    setActive(step+1);
                    setSubmit(true);
                }
            }>Submit</button>
        </div>
    )
}

export default Form3
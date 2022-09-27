import React, { useState } from 'react'

function Form2(props) {
    const {step,setStep,setActive} = props;

    const [data,setData] = useState({
        door : '',
        street: '',
        city:'',
        country:''
    });
    const [hasErr,setHasErr] = useState(true);

    const [doorErr,setDoorErr] = useState(false);
    const [streetErr,setStreetErr] = useState(false);
    const [cityErr,setCityErr] = useState(false);
    const [countryErr,setCountryErr] = useState(false);

    const validateData = (key) => {
        if(key === 'door'){
            let door = data.door;
            if(door.length < 3){
                setDoorErr(true);
            }else{
                setDoorErr(false);
            }
        }else if(key === 'street'){
            if(data.street.length < 3){
                setStreetErr(true);
            }else{
                setStreetErr(false);
            }
        }else if(key === 'city'){
            if(data.city.length < 3){
                setCityErr(true);
            }else{
                setCityErr(false);
            }
        }else if(key === 'country'){
            if(data.country.length < 3){
                setCountryErr(true);
            }else{
                setCountryErr(false);
            }
        }

        setHasErr(doorErr || streetErr || cityErr || countryErr);
    }

    const handleData = (e) => {
        setData({...data,[e.target.name]: e.target.value});
        validateData(e.target.name);
    }

    return (
        <div className='form'>
            <div className='flex-rc'>
                <div className='input-comp'>
                    <label>Door No.</label>
                    <input type='text' className={doorErr ? 'error-input' : ''} name='door' value={data.door} placeholder='1-127/1' onChange={handleData}></input>
                    {doorErr ? <span className='error'>Please recheck the Door No.</span> : ''}
                </div>
                <div className='input-comp'>
                    <label>Street</label>
                    <input type='text' className={streetErr ? 'error-input' : ''} name='street' value={data.street} placeholder='Main Avenue' onChange={handleData}></input>
                    {streetErr ? <span className='error'>Please recheck the street name.</span> : ''}
                </div>
            </div>
            <div className='flex-rc'>
                <div className='input-comp'>
                    <label>City</label>
                    <input type='text' className={cityErr ? 'error-input' : ''} name='city' value={data.city} placeholder='Kakinada' onChange={handleData}></input>
                    {cityErr ? <span className='error'>Please enter valid city name.</span> : ''}
                </div>
                <div className='input-comp'>
                    <label>Country</label>
                    <input type='text' className={countryErr ? 'error-input' : ''} name='country' value={data.country} placeholder='India' onChange={handleData}></input>
                    {countryErr ? <span className='error'>Please enter valid country.</span> : ''}
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

export default Form2
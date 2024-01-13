import React, { useState } from 'react'
import TextField from '../../ui/TextField'

function SendOTPForm() {
    const [phoneNumber, setPhoneNumber] = useState("")
  return (
    <div className=''>
        <form className='space-y-8'>
            <TextField 
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                label="شماره موبایل خود را وارد کنید"
            />
            <button className='btn btn--primary w-full'>ارسال کد تایید</button>
        </form>
    </div>
  )
}

export default SendOTPForm
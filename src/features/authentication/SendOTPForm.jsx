import React from 'react'
import TextField from '../../ui/TextField'
import Loading from '../../ui/Loading'

function SendOTPForm({onSubmit, phoneNumber, isSendingOtp, onChange}) {
    
    
  return (
    <div>
        <form className='space-y-8' onSubmit={onSubmit}>
            <TextField 
                value={phoneNumber}
                onChange={onChange}
                label="شماره موبایل خود را وارد کنید"
            />
            { isSendingOtp ? <Loading/> :             
                <button className='btn btn--primary w-full'>ارسال کد تایید</button>
            }
        </form>
    </div>
  )
}

export default SendOTPForm
import React from 'react'
import TextField from '../../ui/TextField'
import Loading from '../../ui/Loading'

function SendOTPForm({onSubmit, register, isSendingOtp, errors, phoneNumber, onChange}) {
    
  return (
    <div>
        <form className='space-y-8' onSubmit={onSubmit}>
            <TextField 
                // value={phoneNumber}
                // onChange={onChange}
                name = "phoneNumber"
                label="شماره موبایل خود را وارد کنید"
                register={register}
                // validationSchema={{
                //   required: "شماره تلفن ضروری است"
                // }}
                // errors={errors}
            />
            { isSendingOtp ? <Loading/> :             
                <button className='btn btn--primary w-full'>ارسال کد تایید</button>
            }
        </form>
    </div>
  )
}

export default SendOTPForm
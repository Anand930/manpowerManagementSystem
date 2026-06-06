import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='flex max-h-screen md:h-screen items-center justify-center my-auto'>
                    <div className='border border-input md:p-4  p-2  my-20 rounded-xl w-2xs sm:w-sm'>
        
                        <div className=' mx-auto'>
                            <div className="heading text-center pt-3 pb-4 ">
                                <p>SignUp</p>
                            </div>
                            <div className="input-boxed flex flex-col gap-4">
                                <Input className={'text-sm'} type="text" placeholder='Enter Your Fullname Here' />
                                <Input className={'text-sm  '} type="text" placeholder='Enter Your Email Here' />
                                <Input className={'text-sm'} type="text" placeholder='Enter Your Password Here' />
                                <Input className={'text-sm'} type="file" placeholder='Enter Your Profile Image Here' />
                                <Button>SignUp</Button>
                                <p>Already have an account ? <Link to={"/signin"} className='text-underline text-blue-500'>SignIn</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default SignUp
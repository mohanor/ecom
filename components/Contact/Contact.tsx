

import {Phone, Location, Clock} from '@/components/svgs';

import Input from '../ui/Input';
import Button from '../ui/Button';

export default function Contact() {
  return (
    <div className='my-16 md:max-w-3xl lg:max-w-5xl m-auto space-y-24'>
        <div className='text-center'>
            <h2 className='text-3xl lg:text-4xl font-medium mb-4'>Get In Touch With Us</h2>
            <p className='max-w-xl text-xs lg:text-sm px-1 text-gray-dark-500 font-light m-auto'>
                For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
            </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center'>
            <div className='flex-[.4] space-y-10 mb-10'>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='relative w-10 m-auto md:m-0 mb-2 md:mb-0'>
                        <Location className="text-3xl absolute -top-[10px]"/>
                    </div>
                    <div className='text-center md:text-left'>
                        <h3 className='text-xl font-medium mb-1'>Address</h3>
                        <p className='max-w-[212px] font-light m-auto'>
                            236 5th SE Avenue, New York NY10000, United States
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left'>
                    <div className='w-10 m-auto md:m-0'>
                        <Phone className="text-3xl"/>
                    </div>
                    <div >
                        <h3 className='text-xl font-medium mb-1'>Phone</h3>
                        <div className='max-w-[212px] m-auto font-light'>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left'>
                    <div className='w-10 m-auto md:m-0'>
                        <Clock className="text-3xl"/>
                    </div>
                    <div>
                        <h3 className='text-xl font-medium mb-1'>Working Time</h3>
                        <div className='max-w-[212px] font-light m-auto'>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-[.6] space-y-6 px-4'>
                <Input label="Your name" id="your_name" className='text-gray-dark-500'/>
                <Input label="Your name" id="your_name" className='text-gray-dark-500'/>
                <Input label="Email address" id="email_address" className='text-gray-dark-500'/>
                <Input label="Subject" id="subject" className='text-gray-dark-500'/>
                <Input label="Message" id="message" componentType="textarea" className='text-gray-dark-500'/>
                <div className='text-center  md:text-left'>
                    <Button size='lg' className='rounded-md font-light md:px-28 md:py-7'>Submit</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

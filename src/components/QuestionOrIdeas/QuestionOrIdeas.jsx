import React from 'react'
import Input from './Input'
import TextArea from './TextArea'

const QuestionOrIdeas = () => {
  return (
    <div className='bg-blue py-[102px]'>
      <div className="mb-6 text-3xl sm:text-[40px] text-lightGray text-center font-bold font-GoogleSans">Question Or Ideas?</div>
      <div className="mb-20 text-center text-lightGray w-[90%] max-w-[64ch] mx-auto">
        Have a cool idea for our event or there something that’s not entirely clear? Just shoot us a
        message. We would love to hear you out!
      </div>
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-[90%] max-w-[992px] mx-auto">
          <div className="grid gap-4">
            <div>
              <Input type="text" placeholder="Name" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Input type="number" placeholder="Phone Number" />
            </div>
          </div>
          <div>
            <TextArea />
          </div>
        </div>
        <div className="flex justify-center mt-14">
          <button className="bg-white text-blue border-blue border-2 rounded px-3 py-4 w-[166px] hover:scale-90 active:scale-100 transition duration-200">Hit Us!</button>
        </div>
      </form>
    </div>
  )
}

export default QuestionOrIdeas
import React from 'react';

const Form = () => {
    return (
        <div className="p-6">
            <h1 className='text-2xl p-5 font-bold text-center'> If you have any questions, Please let us know</h1>
    <form className='p-5 lg:w-3/4 mx-auto'>
    <div className="flex flex-col mb-6">
    <input type="email" id="email" className="bg-gray-50 border-[3px] border-komla text-gray-900 text-md rounded focus:ring-komla focus:outline-none focus:shadow-lg focus:shadow-komla block w-full p-2.5 " placeholder="Email" required/>
        </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <input  type="text" id="name" name="name" className="bg-gray-50 border-[3px] border-komla text-gray-900 text-md rounded focus:ring-komla focus:outline-none focus:shadow-lg focus:shadow-komla block w-full p-2.5 " placeholder="Name" required />
        </div>
        <div className="flex flex-col">
          <input  type="text" id="name" name="name" className="bg-gray-50 border-[3px] border-komla text-gray-900 text-md rounded focus:ring-komla focus:outline-none focus:shadow-lg focus:shadow-komla block w-full p-2.5 " placeholder="Phone" required />
        </div>
    
      </div>
      <div className="flex flex-col col-span-2 my-6">
          <textarea maxLength="500" rows="4" type="text" id="subject" name="subject" className="fbg-gray-50 border-[3px] border-komla text-gray-900 text-md rounded focus:ring-komla focus:outline-none focus:shadow-lg focus:shadow-komla block w-full p-2.5 " placeholder="Message" required />
        </div>
      <div className="flex justify-start ">
        <button type="submit" class="bg-komla text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500">
          Submit
        </button>
      </div>
    </form>
  </div>
    );
};

export default Form;
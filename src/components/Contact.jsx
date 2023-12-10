import React, { useState } from 'react'
import emailjs from 'emailjs-com';
const Contact = () => {
  const[notDone,done]=useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_nhg5j5g', 'template_1gjbkan', e.target, 'Rscw9r_WiBTIRtJwY')
          .then(
            (result) => {
              console.log('Email sent:', result.text);
            },
            (error) => {
              console.log('Error sending email:', error.text);
            }
          );
            done(true)
      };
  return (
    <div id='contact' className='m-1 mt-80 relative '>
        
<div className="flex justify-center items-center w-screen h-screen bg-white">

	<div className="container mx-auto my-4 px-4 lg:px-20">

		<div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
			{/* <div classNameName="flex">

				Name
			</div> */}
    
            <div className='text-wt font-bold text-4xl'><center><h3>Contact us for more details</h3></center></div>
            {/* <form className='' onSubmit={sendEmail}>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5 ">
				<input className="w-full bg-gray-100 text-wt mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" name=" firstName" placeholder="First Name*" />
				<input className="w-full bg-gray-100 text-wt mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Last Name*" name='lastName' />
				<input className="w-full bg-gray-100 text-wt mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" name='email' />
				<input className="w-full bg-gray-100 text-wt mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number" placeholder="Phone*"  name='phone'/>
        </div>
				<div class="my-4">
					<textarea placeholder="Message*" class="w-full h-32 bg-wt text-navColor mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" name='message'></textarea>
				</div>
				<div class="my-2 w-1/2 lg:w-1/4">
					<button class="uppercase text-sm font-bold tracking-wide bg-navColor text-wt text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline" type='submit'>
            Send Message
          </button>
				</div>
                </form> */}
                <form className='' onSubmit={sendEmail}>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input
            className="w-full bg-gray-100 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="firstName"
            placeholder="First Name*"
            required // Add the required attribute
        />
        <input
            className="w-full bg-gray-100 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name*"
            name='lastName'
        />
        <input
            className="w-full bg-gray-100 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
            name='email'
        />
        <input
            className="w-full bg-gray-100 text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Phone*"
            name='phone'
            required 
        />
    </div>
    <div class="my-4">
        <textarea
            placeholder="Message*"
            class="w-full h-32 bg-wt text-black mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            name='message'
            required
        ></textarea>
    </div>
    <div class="my-2 w-1/2 lg:w-1/4">
        <button
            class="uppercase text-sm font-bold tracking-wide bg-navColor text-wt text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            type='submit'
            // Add an onClick event handler for validation
        >
            Send Message
        </button>
    </div>
    {notDone &&<div class="flex items-center bg-navColor text-white text-sm font-bold px-4 py-3" role="alert">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p> <p>Form submitted successfully!! We will reach you soon</p></p>
</div>}
</form>

			</div>
            

			<div
				class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto text-navColor rounded-2xl">
				<div class="flex flex-col text-white">
					<h1 class="font-bold uppercase text-4xl my-4">Drop in our office</h1>
					<p class="text-gray-400">CodeSite Varanasi UttarPradesh codesite81@gmail.com
					</p>

					<div class="flex my-4 w-2/3 lg:w-1/2">
						<div class="flex flex-col">
							<i class="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Main Office</h2>
              <p class="text-gray-400">Bhadwar Near Heritage NH-2 highway Varanasi UP</p>
            </div>
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-1/2">
            <div class="flex flex-col">
              <i class="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Call Us</h2>
              <p class="text-gray-400">Tel: 8299141590</p>
             >
            </div>
          </div>
          
          <div class="flex my-4 w-2/3 lg:w-1/2">
            <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
              <i class="fab fa-facebook-f text-blue-900" />
            </a>
            <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
              <i class="fab fa-linkedin-in text-blue-900" />
            </a>
          </div>
        </div>
      </div>
    </div>
    
</div>


<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
  <div>
    
  </div>
</div>
{/* <div className='contact_number fixed '>
<div className='fixed bottom-9 left-[760px] h-24 w-24 flex items-center justify-center rounded-full circular-div bg-navColor  '>
            
</div>
</div> */}
        

</div>
        


			
    
  )
}

export default Contact

import React from 'react'

const App = () => {
  return (
    <body className='bg-[#0A0E27]'>
      <header>
        <nav className='flex justify-between'>
      <img src="./logo.png" alt="" className='w-[100px] h-[70px] ml-[150px] pt-[30px] rounded-[5px] mr-[500px]'/>
      <ul className='flex pt-[50px]  gap-[50px]'>
        <li className='text-[#b4b0b0] hover:text-white'>Features</li>
        <li className='text-[#b4b0b0] hover:text-white'>Solution</li>
        <li className='text-[#b4b0b0] hover:text-white'>Reviews</li>
        <li className='text-[#b4b0b0] hover:text-white'>Premium<button className='bg-[#b4b0b07b] text-[#ffa600b1] w-[40px] h-[20px] rounded-[50px]'>new</button></li>
      </ul>
      <button className='bg-[#6A0DAD] text-[#fff] w-[150px] h-[40px] rounded-[50px] mt-[35px] mr-[100px] hover:w-[155px] hover:h-[45px]'>Get Started</button>
      </nav>
      </header>
      <div>
        <p className='text-[#fff] text-[70px] pt-[80px] pl-[450px] font-bold'>Shaping a world with <br /></p>
        <p className='text-[#fff] text-[70px]  pl-[550px] font-bold'>reimagination.</p>
        <p className='text-[#b4b0b0] text-[15px] pt-[20px] pl-[450px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt nam itaque sed eius modi error totam sit </p>
        <p className='text-[#b4b0b0] text-[15px]  pl-[490px]'>illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
        <button className='bg-[#6A0DAD] text-[#fff] w-[150px] h-[45px] rounded-[50px] mt-[80px] ml-[650px] hover:w-[160px] hover:h-[50px]'>Get Started</button>
        <button className='bg-[#b4b0b07b] text-[#fff] w-[150px] h-[45px] rounded-[50px] mt-[20px] ml-[20px] mb-[80px] hover:w-[160px] hover:h-[50px]'>Learn More</button>
      </div>
      <div className=" text-white py-12">
      <div className="border-t border-gray-700 pt-8 flex justify-around border-b pb-8 ml-[350px] mr-[350px]">
        <div className="text-center max-w-xs">
          <h3 className="text-lg font-bold">The lowest price</h3>
          <span className="text-gray-400 mt-2">Some text here</span>
        </div>
        <div className="text-center max-w-xs">
          <h3 className="text-lg font-bold">The fastest on the market</h3>
          <p className="text-gray-400 mt-2">Some text here</p>
        </div>
        <div className="text-center max-w-xs">
          <h3 className="text-lg font-bold">The most loved</h3>
          <p className="text-gray-400 mt-2">Some text here</p>
        </div>
      </div>
    </div>
    <div className='flex gap-[100px] pt-[50px]'>
      <img src="./microsoft.svg" alt="" className='ml-[200px] grayscale hover:grayscale-0'/>
      <img src="./airbnb.svg" alt="" className='grayscale hover:grayscale-0'/>
      <img src="./google.svg" alt=""   className='w-[100px] grayscale hover:grayscale-0'/>
      <img src="./ge.svg" alt="" className='grayscale hover:grayscale-0'/>
      <img src="./netflix.svg" alt="" className='w-[100px] grayscale hover:grayscale-0'/>
      <img src="./google-cloud.svg" alt=""  className='w-[200px] grayscale hover:grayscale-0'/>
    </div>

    <div>
      <p className='text-[#fff] text-[40px] pt-[200px] pl-[200px] font-bold'>A technology-first approach to <br />payments and finance</p>
      <p className='text-[#b4b0b0] text-[15px] pt-[30px] pl-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad ipsum pariatur <br />autem, fugit laborum in atque amet obcaecati? Nisi minima aspernatur, quidem nulla <br />cupiditate nam consequatur eligendi magni adipisci.</p>
    </div>
    <div>
      <p className='text-[#fff] text-[40px] pt-[200px] pl-[200px] font-bold'>Nuxt development is carried out <br />by passionate developers</p>
      <p className='text-[#b4b0b0] text-[15px] pt-[30px] pl-[200px]'>Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?<br /> Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
      <p className='text-[#b4b0b0] text-[15px] pt-[30px] pl-[200px]'>Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at <br />reprehenderit aliquam a ipsum quas voluptatem. Quo pariatur asperiores eum <br />amet.</p>
    </div>
    <div className='flex'>
   
    <div className='ml-[200px] mt-[100px]'>
  
         <div>
         <div className="flex">
              <img src="./chat.png" alt="" className='w-[50px]'/>
                <h3 className="font-semibold text-lg text-indigo-300 mt-[10px]">Chat Anytime</h3>
               </div>
                <p className="text-gray-500 ">Asperiores nemo possimus nesciunt quam mollitia.</p>
              </div> 
              <hr className='w-[400px] mt-[20px] mb-[20px]'/>
              <div>
              <div className="flex">
                <img src="dunya.jpg" alt="" className='w-[40px]'/>
                <h3 className="font-semibold text-lg text-teal-300">Real Time Location</h3>
                </div>
                <p className="text-gray-500">Asperiores nemo possimus nesciunt quam mollitia.</p>
              </div> 
              </div>
              <img src="./sistem.svg" alt="" className='w-[650px] ml-[200px]'/>

    </div>
    </body>
 )
}

export default App
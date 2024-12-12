function Home() {
   return (
      <>
         <div className="flex flex-col items-center justify-center pt-20 h-screen">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="font-inter font-bold text-xl sm:text-2xl md:text-5xl text-center">
               <div className="text-nowrap">Stay Organized. Stay Focused.</div>
               <div className="text-2xl sm:text-3xl md:text-6xl my-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Achieve More.
               </div>
            </div>
            <div className="description  md:w-3/5 text-center text-inter text-xs md:text-sm font-poppins my-16 text-gray-300 mx-2">
               <div className="text-lg text-gray-200 my-2">
                  Welcome to <span className="font-inter font-extrabold">TaskEase</span>
               </div>
               Your ultimate task management solution! Designed to help you plan, prioritize, and achieve your
               goals effortlessly, TaskEase empowers you to stay productive and on top of your schedule.
            </div>
         </div>
      </>
   );
}

export default Home;

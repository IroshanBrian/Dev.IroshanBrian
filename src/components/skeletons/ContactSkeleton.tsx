
const ContactSkeleton = () => {
     return (
          <section id="contact" className="py-12">
               <div className="max-w-6xl mx-auto px-4">
                    <div
                         className="mb-8"
                    >
                         <h1 className="text-white text-4xl font-extrabold border-b-2 border-cyan-500 pb-2">
                              <span className="bg-gray-700 h-6 w-32 inline-block rounded-md"></span>
                         </h1>
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-between items-center lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8">
                         <div
                              className="flex-1 bg-black-100 p-6 rounded-2xl"
                         >
                              <form className="flex flex-col gap-8">
                                   <label className="flex flex-col">
                                        <span className="text-white font-medium mb-4">Your Name</span>
                                        <input
                                             type="text"
                                             placeholder="What's your good name?"
                                             className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                                             disabled
                                        />
                                   </label>
                                   <label className="flex flex-col">
                                        <span className="text-white font-medium mb-4">Your email</span>
                                        <input
                                             type="email"
                                             placeholder="What's your web address?"
                                             className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                                             disabled
                                        />
                                   </label>
                                   <label className="flex flex-col">
                                        <span className="text-white font-medium mb-4">Your Message</span>
                                        <textarea
                                             rows={7}
                                             placeholder="What you want to say?"
                                             className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                                             disabled
                                        />
                                   </label>
                                   <button
                                        type="submit"
                                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-black bg-cyan-400 font-bold shadow-md shadow-primary"
                                        disabled
                                   >
                                        Send
                                   </button>
                              </form>
                         </div>

                         <div
                              className="w-full lg:w-1/2 h-[48rem] bg-gray-700 rounded-2xl"
                         >
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default ContactSkeleton

import { useEffect, useState, FormEvent } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Earth.js";
import { slideIn } from "../utils/motion";
const Contact = () => {
     const [result, setResult] = useState("");

     const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setResult("Sending....");
          const formData = new FormData(e.currentTarget);

          formData.append("access_key", "6519de1b-fbad-447c-97e6-f1852928f3f8");

          try {
               const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
               });

               const data = await response.json();

               if (data.success) {
                    setResult("Message Sent Successfully!");
               } else {
                    console.error("Error", data);
                    setResult(data.message);
               }
          } catch (error) {
               console.error("Submission error:", error);
               setResult("An error occurred while sending the message.");
          }
     };

     const closeAlert = () => {
          setResult("");
     };

     useEffect(() => {
          if (result) {
               const timer = setTimeout(() => setResult(""), 5000);
               return () => clearTimeout(timer);
          }
     }, [result]);

     return (
          <>
               <section id="contact" className="py-12">
                    <div className="max-w-6xl mx-auto px-4">
                         <motion.div
                              initial={{ opacity: 0, y: -50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              className="mb-8"
                         >
                              <h2 className="text-white text-4xl font-extrabold border-b-2 border-cyan-500 pb-2">
                                   Contact Me<span className="text-cyan-200 text-5xl">.</span>
                              </h2>
                         </motion.div>

                         {result && (
                              <div className="flex justify-center mb-4">
                                   <div
                                        id="alert-1"
                                        className="flex items-center p-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                                        role="alert"
                                   >
                                        <svg
                                             className="flex-shrink-0 w-4 h-4"
                                             aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                        >
                                             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span className="sr-only">Info</span>
                                        <div className="ms-3 text-sm font-medium mr-2">{result}</div>
                                        <button
                                             onClick={closeAlert}
                                             type="button"
                                             className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
                                             aria-label="Close"
                                        >
                                             <svg
                                                  className="w-3 h-3"
                                                  aria-hidden="true"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 14 14"
                                             >
                                                  <path
                                                       stroke="currentColor"
                                                       strokeLinecap="round"
                                                       strokeLinejoin="round"
                                                       strokeWidth="2"
                                                       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                  />
                                             </svg>
                                        </button>
                                   </div>
                              </div>
                         )}

                         <div className="flex flex-wrap justify-center lg:justify-between items-center lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8">
                              <motion.div
                                   variants={slideIn("left", "tween", 0.2, 1)}
                                   className="flex-1 bg-black-100 p-6 rounded-2xl"
                              >
                                   <form onSubmit={onSubmit} className="flex flex-col gap-8" data-netlify="true">
                                        <input type="hidden" name="from_name" value="IroshanBrian." />
                                        <label className="flex flex-col">
                                             <span className="text-white font-medium mb-4">Your Name</span>
                                             <input
                                                  type="text"
                                                  name="name"
                                                  placeholder="What's your good name?"
                                                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                                             />
                                        </label>
                                        <label className="flex flex-col">
                                             <span className="text-white font-medium mb-4">Your email</span>
                                             <input
                                                  type="email"
                                                  name="email"
                                                  placeholder="What's your web address?"
                                                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                                             />
                                        </label>
                                        <label className="flex flex-col">
                                             <span className="text-white font-medium mb-4">Your Message</span>
                                             <textarea
                                                  rows={7}
                                                  name="message"
                                                  placeholder="What you want to say?"
                                                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                                             />
                                        </label>
                                        <button
                                             type="submit"
                                             className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-black bg-cyan-400 font-bold shadow-md shadow-primary"
                                        >
                                             Send
                                        </button>
                                   </form>
                              </motion.div>

                              <motion.div
                                   variants={slideIn("right", "tween", 0.2, 1)}
                                   className="w-full lg:w-1/2 h-[36rem] "
                              >
                                   <EarthCanvas />
                              </motion.div>
                              <div className="my-10 sm:hidden block">
                                   <a href="#" className="flex justify-center mb-2">
                                        <div className="w-5 h-10 rounded-full bg-white">
                                             <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm0-1.5c-4.69 0-8.498-3.807-8.498-8.497s3.808-8.498 8.498-8.498 8.497 3.808 8.497 8.498-3.807 8.497-8.497 8.497zm4.845-6.711c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291zm-7.564-.289h5.446l-2.718-3.522z" fill-rule="nonzero" /></svg>
                                        </div>
                                   </a>
                                   <span className="text-white font-title font-light">Back To Top</span>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default Contact;

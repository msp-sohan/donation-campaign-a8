
const Banner = () => {
   return (
      <div className="h-[70vh] relative bg-black bg-opacity-10 mx-auto">
         <img
            className="h-full w-full opacity-10 bg-opacity-25 bg-black "
            src="https://i.ibb.co/FmHySkB/Rectangle-4281.jpg"
            alt=""
         />
         <div className="absolute top-[50%]  left-[10%] md:left-[20%] xl:left-[30%] right-[10%] md:right-[20%] xl:right-[30%]">

               <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                  <input
                     type="search"
                     className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-black dark:focus:border-primary"
                     placeholder="Search Here..."
                     aria-label="Search"
                     aria-describedby="button-addon3" />
                  <button
                     className="relative z-[2] bg-[#FF444A] text-white rounded-r-lg border-2 border-primary px-6 py-3 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-60 focus:outline-none focus:ring-0"
                     type="button"
                     id="button-addon3"
                     data-te-ripple-init>
                     Search
                  </button>
               </div>
            </div>
         {/* <div className="searchbar absolute bottom-[43%] justify-center px-20">
            <form >
               <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
               </label>
               <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                     <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                     >
                        <path

                           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                     </svg>
                  </div>
                  <input
                     type="search"
                     name="search"
                     id="default-search"
                     className="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search by category..."
                     required
                  />
                  <button
                     type="submit"
                     className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                     Search
                  </button>
               </div>
            </form>
         </div> */}
      </div>
   );
};

export default Banner;
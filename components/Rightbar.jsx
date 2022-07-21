const Rightbar = () => {
  return (
    <aside className="w-48 sm:w-80 px-4 py-2 fixed flex flex-col right-0 z-20">
      <div className="flex flex-col right-0 sm:right-auto absolute">
        <div className="relative flex w-full rounded">
          <input type="search" className="relative w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
          <span className="flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded cursor-pointer" id="basic-addon2">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </span>
        </div>

        <div className="mt-4 mb-8 p-4 rounded-xl bg-gray-50 shadow-xl hidden lg:block">
          <h1 className="font-bold text-xl mb-2 py-2 bg-black text-white text-center rounded-2xl">Welcome to (My Site)</h1>
          <p className="text-lg text-justify">Get benefits from your own writing skills. Creating video takes a lot of time and skills, making website takes lot of money and efforts, here is the solution for both problem. Earn from writng articles.</p>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-4 justify-center text-gray-500">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Disclaimer</li>
            <li className="cursor-pointer">Terms</li>
            <li className="cursor-pointer">Privacy</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Rightbar;
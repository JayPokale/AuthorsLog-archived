import Link from "next/link";
import { useState } from "react";

const signup = () => {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="bg-gray-200 h-screen flex items-center p-4">
      <div className="flex flex-col items-center bg-white w-screen max-w-lg rounded-md overflow-hidden mx-auto shadow-2xl select-none">
        <div className="flex justify-around w-full text-xl font-bold text-gray-500 tracking-wider cursor-default">
          <div className="w-1/2 flex justify-center py-4 z-10" style={{ boxShadow: '0 6px 16px 0 rgb(0 0 0 / 20%)', border: '2px solid rgb(256 256 256)' }}>Sign up</div>
          <Link href={"/login"}><div className="w-1/2 flex justify-center py-4 bg-gray-50 cursor-pointer" style={{border: '2px solid transparent' }}>Log in</div></Link>
        </div>
        <div className=" w-full bg-white flex flex-col items-center z-20">
          <form className="w-full flex flex-col items-center px-10 space-y-4 mt-8 mb-4">
            <div className="userNAME flex w-full justify-evenly space-x-4">
              <input className="bg-gray-100 focus:outline-none focus:bg-gray-100 pl-6 pr-3 w-11/12 mx-auto shadow-inner py-3" type="text"
                name="fname" placeholder="First Name" onChange={(e) => setFname(e.target.value)}/>
              <input className="bg-gray-100 focus:outline-none focus:bg-gray-100 pl-6 pr-3 w-11/12 mx-auto shadow-inner py-3" type="text"
                name="lname" placeholder="Last Name" onChange={(e) => setLname(e.target.value)}/>
            </div>
            <div className="w-full flex justify-center">
              <input className="bg-gray-100 focus:outline-none focus:bg-gray-100 pl-6 pr-3 w-full shadow-inner py-3" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="w-full flex justify-center">
              <input className="bg-gray-100 focus:outline-none focus:bg-gray-100 pl-6 pr-3 w-full shadow-inner py-3" type="password" name="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input className="w-full flex justify-center px-6 py-3 rounded-sm bg-green-600 text-gray-50 font-semibold tracking-widest drop-shadow-md cursor-pointer" style={{ boxShadow: '0 4px 10px 0 rgba(27, 148, 71, 0.3)' }} type="submit" value="Submit"/>
          </form>
          <div className="w-full flex justify-center my-8">
            <div className="relative w-full h-px bg-gray-300 mx-10"></div>
            <div className="absolute -translate-y-1/2 bg-white px-4 text-gray-400">or connect with</div>
          </div>
          <div className="w-full grid grid-cols-3 divide-x-2 my-6">
            <div><img className="h-12 mx-auto cursor-pointer" src="https://hrcdn.net/community-frontend/assets/facebook-colored-af4249157d.svg" /></div>
            <div><img className="h-12 mx-auto cursor-pointer" src="https://hrcdn.net/community-frontend/assets/google-colored-20b8216731.svg" /></div>
            <div><img className="h-12 mx-auto cursor-pointer" src="https://hrcdn.net/community-frontend/assets/linkedin-colored-1db195795c.svg" /></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default signup;
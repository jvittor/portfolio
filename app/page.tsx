"use client";


export default function Home() {
  return (
    <>
      <main>
        <div className="bg-[url('/disc.gif')]  bg-cover absolute top-32 bottom-0 left-0 right-0">
        </div>
        <div className=" mt-20 max-w-screen-xl justify-between mx-auto p-2 flex flex-col space-y-5 font-black text-white text-4xl sm:text-5xl">
          <div className="z-10 inline-block px-3 bg-primary "></div>
          <div className="z-10 inline-block w-full max-w-md px-3 bg-primary">
            
          </div>
          <div className="z-10 inline-block w-full max-w-md px-3 bg-primary">
          
          </div>
          <div className="font-light z-10 inline-block w-full max-w-md px-3 bg-primary text-base sm:text-2xl">
        
          </div>
          <div>
            <a href="/about">
              <button className="z-10 shrink-border">
                
              </button>
            </a>
          </div>
        </div>
      </main>

    </>
  );
}
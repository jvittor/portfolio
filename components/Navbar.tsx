import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <header>
            <nav className="bg-blue border-gray-200 dark:bg-blue">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">

                        <Link href="/">
                            <img src="https://i.postimg.cc/hfrcXV7Z/symbol.png" className="h-20 rounded-lg" alt='logo' />
                        </Link>

                        <div className='hidden lg:flex divide-x-2 grid grid-cols-2 gap-5'>
                            <div className='flex flex-col justify-center'>
                                <p className='font-bold'>sineca</p>
                                <p className='font-bold opacity-60'>engineering & music</p>
                                <p className='opacity-60'>jvittor.contatos@gmail.com</p>
                            </div>
                            <div className=' flex flex-col justify-center pl-5'>
                                <p className='font-bold opacity-90'>software developer</p>
                                <p className='font-bold opacity-90'>ux/ui design</p>
                                <p className='font-bold opacity-90'>musician</p>
                            </div>
                        </div>
                    </div>


                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue dark:bg-blue md:dark:bg-blue dark:border-blue">
                            <div className='flex flex-col justify-center'>
                                <li>
                                    <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-#C86236 md:p-0 dark:text-black md:dark:hover:text-orange dark:hover:bg-orange dark:hover:text-white md:dark:hover:bg-transparent">
                                        <img src='https://i.postimg.cc/5Qdk3KD5/sobre2.png' className="w-auto h-12 hover:opacity-80" alt='sobre' />
                                    </a>
                                </li>
                                <li>
                                    <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-#C86236 md:p-0 dark:text-black md:dark:hover:text-orange dark:hover:bg-orange dark:hover:text-white md:dark:hover:bg-transparent">
                                        <img src='https://i.postimg.cc/kBjLrsSC/contato-1.png' className="w-auto h-10 hover:opacity-80" alt='contato' />
                                    </a>
                                </li>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <li>
                                    <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-#C86236 md:p-0 dark:text-black md:dark:hover:text-orange dark:hover:bg-orange dark:hover:text-white md:dark:hover:bg-transparent">
                                        <img src='https://i.postimg.cc/CZnNQHGc/projetos2.png' className="w-auto h-10 hover:opacity-80" alt='projeto' />
                                    </a>
                                </li>
                                <li>
                                    <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-#C86236 md:p-0 dark:text-black md:dark:hover:text-orange dark:hover:bg-orange dark:hover:text-white md:dark:hover:bg-transparent">
                                        <img src='https://i.postimg.cc/hXzykBg8/resumo.png' className="w-auto h-10 hover:opacity-80" alt='resumo' />
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Navbar
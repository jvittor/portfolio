import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <>

            <div className='gap-10 flex-row bg-white'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7 gap-10'>
                    <div className='max-w-xl'>
                        <p >
                            olaaa, me chamo João Vítor, tenho 22 anos, sou estudante de Engenheria da Computação na UFRB - Universidade Federal do Recôncavo da Bahia e atualmente trabalho como Desenvolvedor Full Stack em uma ONG chamada Grupo Ambientalista da Bahia.
                            Tenho como linguagem principal o Typescript, onde atuo tanto com Frontend, usando TailwindCSS,
                            quando com Backend, usando Express e Prisma. Sou responsável por todo a estruturação e desenvolvimento da plataforma “Liga Colaborativa dos Povos”, que é um projeto dentro da ONG que tem como fim ajudar povos de comunidades
                            tradicionais baianas a fazerem registros de ocorrências ambientais, além de atuar como porta voz e conexão entre comunidades que passam pela mesma situação. Também fui Monitor de Programação na
                            universidade onde estudo das matérias de Processamento de Dados I e II e Estruturas de Dados.
                            <br />
                            <br />
                            Além dessas experiências em tecnologia, tenho como hobbie e uma segunda paixão a música. Estudo música a
                            5 anos e de lá pra cá venho aprendendo desde do canto a produção musical e instrumentos.
                            Toco violão, baixo, guitarra e arranho um pouco a bateria e busco como meta ser um multi-instrumentalista. Arte em geral sempre me tocou muito, então tudo que é do meio artistico
                            eu curto: livros, cinema, fotografia e etc.
                            <br />
                            <br />
                            Dito isto, estou sempre colocando o cérebro pra funcionar e mante-lo ativo com coisas variadas e divertidas. Nesse sitezin vou add todos meus projetos de
                            programação e artisticos (mais projetos de músicas).
                        </p>
                    </div>
                    <div className='space-y-3 flex-col space-x-3 text-4xl '>
                        <div className="flex gap- flex-col grid gap-10 ">
                            <div className='grid gap-1 text-xl inline-block w-full max-w-md bg-primary'>
                                <h2 className='tracking-widest'>EXPERIÊNCIA</h2>
                                <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                                    <p className='text-sm font-bold'>● Grupo Ambientalista da Bahia | </p> 
                                    <img className="w-20" src="https://i.postimg.cc/kBZ6v1vw/image.png" />
                                </div>
                                <p className='text-sm'>Desenvolvedor Fullstack - (2023 - atualmente)</p>
                                <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                                    <p className='text-sm font-bold'>● Universidade Federal do Recôncavo da Bahia | </p> 
                                    <img className="w-20" src="https://i.postimg.cc/xXCJvrmX/image.png" />
                                </div>
                                <p className='text-sm'>Monitor de Programação - (2023)</p>
                            </div>
                            <div className='grid gap-2 text-xl inline-block w-full max-w-md bg-primary'>
                                <h2 className='tracking-widest'>HOBBIES</h2>
                                <Link href="https://spotify.com" target='_blank' rel="noopener noreferrer">
                                    <div className='flex items-center space-x-3 rtl:space-x-reverse'>
                                        <img className='w-20' src="https://i.postimg.cc/HJYMPJFk/Melhor-N-o-Olhar.png" />
                                        <p className='text-sm'> EQUILIBIUM EP | - (2023)</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='mt-20 flex justify-end'>
                                <img src="https://i.postimg.cc/8jhQZsh3/symbol-dependences.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default About
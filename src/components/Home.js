import React from "react"

export default function Home(){
    return (
        <main className="relative">
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-blue-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img className="rounded w-35 h-44 lg:w-64 mr-8" alt ="pfp" src="images/IMG-6063.jpg"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-100 mb-4">Hi, I'm{" "} <span className="text-green-100">Assaad Howayek</span></h1>

                        <div className="prose lg:prose-xl text-white">
                            Welcome! Using the top bar you can find a summary of my resume and a few projects I have worked on over the years. I am a fourth 
                            year Computer Engineering student at the University of Ottawa. I've always had a passion for software and hardware since my high-school computing classes. I am an 
                            avid learner and am always looking to deepen my knowledge and strengthen my skills as a computer engineer. I complete my studies December 2022.
                        </div>
                    </div>
                    
                </section>
            </div>
            
        </main>
    );
}
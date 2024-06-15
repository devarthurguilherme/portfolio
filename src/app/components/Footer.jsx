import LogoArthurGuilherme from './LogoArthurGuilherme';

{/*Change a for Link and put a MAP Function*/}

export default function Footer(){
     {/*
        <footer className='bg-blue-600 text-white py-4'>
        <div className='container mx-auto'>
            <p>&copy; { new Date().getFullYear()} Data Anayst Arthur Guilherme.</p>
        </div>
       </footer>
        */}
    return(
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <LogoArthurGuilherme />
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                    © { new Date().getFullYear()} Data Analyst               
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="ml-3 text-gray-500" href="https://github.com/devarthurguilherme" target="_blank" rel="noopener noreferrer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.87 8.167 6.839 9.487.5.092.683-.217.683-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.002.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.086.637-1.337-2.22-.252-4.555-1.11-4.555-4.942 0-1.09.39-1.982 1.029-2.681-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.802c.852.004 1.71.115 2.513.337 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.202 2.393.1 2.646.64.699 1.029 1.591 1.029 2.681 0 3.842-2.338 4.687-4.566 4.932.359.309.679.92.679 1.854 0 1.337-.012 2.416-.012 2.747 0 .267.18.577.688.48C19.13 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                        />
                    </svg>
                </a>
                
                <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/arthurguilherme92/" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
                </span>
            </div>
        </footer>

    )
}
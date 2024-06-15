import LogoArthurGuilherme from "./LogoArthurGuilherme";
import NavBar from "./NavBar";
import Button from "./Button";

export default function Header(){
    return(
        <header className="text-red-600 body-font fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <LogoArthurGuilherme />
                <NavBar />
                <Button />
            </div>
        </header>
    )
};
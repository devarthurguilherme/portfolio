import Link from "next/link"


const NavBar = () => {
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" href='/'>Home</Link>
      <Link className="mr-5 hover:text-gray-900" href='/projects'>Projects</Link>
      <Link className="mr-5 hover:text-gray-900" href='/about'>About</Link>
      <Link className="mr-5 hover:text-gray-900" href='/contact'>Contact</Link>
    </nav>
  )
}

export default NavBar
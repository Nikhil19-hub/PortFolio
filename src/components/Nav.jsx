import resume from '../assests/resume.pdf'

export const Nav = () => {
  return (
    <nav className="mb-12 flex justify-between font-burtons">
          <h1 className="text-2xl ">PortFolio</h1>
          <ul className="text-2xl gap-8 flex items-center cursor-pointer text-gradient-to-r from-white to-gray-400">
            <li>
              <a href="#services" >
                Services
              </a>
            </li>
            <li>
              <a href="#projects" >
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" >
                Contact
              </a>
            </li>
            <li>
              <a className='text-orange-500' target='_blank' href="https://drive.google.com/file/d/1HimvQw5h7qryISqySCpnCut81Hb4Pbj3/view?usp=drive_link" download="Nikhil_Kamble_resume">
                Resume
              </a>
            </li>
            
          </ul>
        </nav>
  )
}

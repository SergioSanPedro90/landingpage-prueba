
import { Eclipse, Globe, Headset, Info, Phone, User } from "lucide-react"


export const Navbar = () => {

  const navigate = [
  { name: 'Español', icon: Globe },
  { name: 'Alto contraste', icon: Eclipse },
  { name: 'Atención al cliente', icon: Headset },
  { name: 'Contactar con ventas', icon: Phone },
  { name: 'Iniciar sesión', icon: User },
  { name: 'Sobre nosotros', icon: Info }
];

  return (
    <header className="shadow-md border-b">
      <nav className="p-4 flex gap-4 justify-center" >
        {
          navigate.map(item => (
            <div key={item.name} className="text-gray-700 flex hover:text-blue-800 gap-2 cursor-pointer">
              <item.icon className="w-5 h-5"/> 
              <span>{item.name}</span>
            </div>
          ))
        }
      </nav>
    </header>
  )
}

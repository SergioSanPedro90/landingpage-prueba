
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

const menu = [
  { name: 'Productos'},
  { name: 'Soluciones'},
  { name: 'Precios'},
  { name: 'Recursos'},
  { name: 'Sobre nosotros'}
]

  return (
    <header className="shadow-md border-b">
      <nav className="p-4 flex gap-4 justify-center" >
        {
          navigate.map(item => (
            <div key={item.name} className="text-gray-700 text-sm items-center flex hover:text-blue-800 gap-2 cursor-pointer">
              <item.icon className="w-4 h-4"/> 
              <span>{item.name}</span>
            </div>
          ))
        }
      </nav>
      <menu className="p-4 flex gap-4 justify-center" >

        <img className="w-25" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjU1LjgyIDM1NS45OSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmNDgwMDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGcgaWQ9Ikh1YlNwb3RfTG9nbyIgZGF0YS1uYW1lPSJIdWJTcG90IExvZ28iPgogICAgPGc+CiAgICAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMzYuMDEgMjAxLjQ4IDQzLjc5IDIwMS40OCA0My43OSAyOTguNjIgMCAyOTguNjIgMCA1OC45MyA0My43OSA1OC45MyA0My43OSAxNTkuMzUgMTM2LjAxIDE1OS4zNSAxMzYuMDEgNTguOTMgMTc5Ljc5IDU4LjkzIDE3OS43OSAyOTguNjIgMTM2LjAxIDI5OC42MiAxMzYuMDEgMjAxLjQ4Ii8+CiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMxOS45MSwyMjEuMTRjMCwxOS45Ni0xNi4yNiwzNi4yMS0zNi4yMiwzNi4yMXMtMzYuMjEtMTYuMjQtMzYuMjEtMzYuMjF2LTEwMi42NmgtNDEuNDd2MTAyLjY2YzAsNDIuODMsMzQuODUsNzcuNjcsNzcuNjgsNzcuNjdzNzcuNjctMzQuODQsNzcuNjctNzcuNjd2LTEwMi42NmgtNDEuNDV2MTAyLjY2WiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik02MjcuNiwxMjkuMDVjMC0yMS4wNSwxMy45My0yNy43MiwyOS4xOC0yNy43MiwxMi4yOCwwLDI4LjUzLDkuMzUsMzkuMTQsMjAuNzFsMjcuMTktMzIuMDZjLTEzLjU5LTE4LjM2LTQxLjEyLTMxLjA1LTYzLjY3LTMxLjA1LTQ1LjEyLDAtNzcuNjMsMjYuMzgtNzcuNjMsNzAuMTMsMCw4MS4xNCw5OS4xOSw1NS40Miw5OS4xOSwxMDAuODQsMCwxNC4wMS0xMy42LDI2LjM3LTI5LjE4LDI2LjM3LTI0LjU1LDAtMzIuNTItMTIuMDItNDMuNzktMjQuNzFsLTMwLjE5LDMxLjM4YzE5LjI1LDIzLjcxLDQzLjEzLDM1Ljc0LDcxLjY2LDM1Ljc0LDQyLjc5LDAsNzcuMjktMjYuNzEsNzcuMjktNjguNDYsMC05MC4xNS05OS4xOC02Mi4xLTk5LjE4LTEwMS4xNloiLz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTI0MS4yMSwyNjAuMzNjLTI0LjU0LDAtMzEuNS0xMC42MS0zMS41LTI2Ljg3di03MS45OGgzOC4xNHYtMzYuNDhoLTM4LjE0di00OC4xbC00Mi4xMiwxOC45MXYxNDYuNjJjMCwzNy40OSwyNS44Niw1Ni40LDYxLjM0LDU2LjQsNS4zMSwwLDEyLjYxLS4zNCwxNi42LTEuMzNsMTAuMjktMzcuODFjLTQuNjQuMzItOS45NS42NS0xNC42MS42NVoiLz4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDc3Ljk2LDExOS42OGMtMjAuNTcsMC0zNC45Miw1Ljk3LTQ4Ljc5LDE5LjU4VjYwLjM2aC00MS42djE0Ni4yM2MwLDU0LjczLDM5LjU3LDkyLjIyLDg0LjA0LDkyLjIyLDQ5LjQzLDAsOTIuNzMtMzguMTUsOTIuNzMtODkuNTZzLTM5LjkzLTg5LjU3LTg2LjM4LTg5LjU3Wk00NzcuNywyNTYuOTVjLTI2LjA2LDAtNDcuMTgtMjEuMTItNDcuMTgtNDcuMThzMjEuMTItNDcuMTgsNDcuMTgtNDcuMTgsNDcuMTgsMjEuMTIsNDcuMTgsNDcuMTgtMjEuMTIsNDcuMTgtNDcuMTgsNDcuMThaIi8+CiAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTkyOS41OSwyMDcuMDljMC01MS40MS00My4zMS04OS41Ni05Mi43My04OS41Ni00NC40NiwwLTg0LjA0LDM3LjQ5LTg0LjA0LDkyLjIydjE0Ni4yM2g0MS42di03OC45MWMxMy44NywxMy42MSwyOC4yMiwxOS41OCw0OC43OSwxOS41OCw0Ni40NSwwLDg2LjM4LTM4LjgxLDg2LjM4LTg5LjU3Wk04OTAuMTMsMjA2LjU4YzAsMjYuMDYtMjEuMTIsNDcuMTgtNDcuMTgsNDcuMThzLTQ3LjE4LTIxLjEyLTQ3LjE4LTQ3LjE4LDIxLjEyLTQ3LjE4LDQ3LjE4LTQ3LjE4LDQ3LjE4LDIxLjEyLDQ3LjE4LDQ3LjE4WiIvPgogICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDY0LjAxLDExNS41MnYtNDEuNzljMTAuOTEtNS4xNSwxOC41NS0xNi4xOSwxOC41NS0yOC45OXYtLjk3YzAtMTcuNjctMTQuNDYtMzIuMTMtMzIuMTMtMzIuMTNoLS45NmMtMTcuNjcsMC0zMi4xMywxNC40Ni0zMi4xMywzMi4xM3YuOTdjMCwxMi44MSw3LjY0LDIzLjg0LDE4LjU1LDI4Ljk5djQxLjc5Yy0xNi4yNCwyLjUxLTMxLjA4LDkuMjEtNDMuMzIsMTkuMDZsLTExNC43My04OS4yNWMuNzUtMi45MSwxLjI4LTUuOSwxLjI5LTkuMDRDODc5LjE0LDE2LjI3LDg2Mi45NC4wMyw4NDIuOTIsMGMtMjAuMDItLjAzLTM2LjI2LDE2LjE4LTM2LjI5LDM2LjItLjAyLDIwLjAyLDE2LjE4LDM2LjI2LDM2LjIsMzYuMjksNi41MiwwLDEyLjU2LTEuODQsMTcuODUtNC44NWwxMTIuODYsODcuNzljLTkuNiwxNC40OS0xNS4yMiwzMS44NC0xNS4yMiw1MC41MnM2LjE4LDM3LjY1LDE2LjYyLDUyLjUzbC0zNC4zMiwzNC4zMmMtMi43MS0uODEtNS41My0xLjM4LTguNTEtMS4zOC0xNi40NSwwLTI5Ljc4LDEzLjMzLTI5Ljc4LDI5Ljc4czEzLjM0LDI5Ljc4LDI5Ljc4LDI5Ljc4LDI5Ljc4LTEzLjMzLDI5Ljc4LTI5Ljc4YzAtMi45OC0uNTctNS44LTEuMzgtOC41MWwzMy45NS0zMy45NWMxNS40MSwxMS43NiwzNC42LDE4LjgzLDU1LjQ5LDE4LjgzLDUwLjYsMCw5MS42Mi00MS4wMiw5MS42Mi05MS42MiwwLTQ1LjgxLTMzLjY1LTgzLjY1LTc3LjU2LTkwLjQzWk0xMDQ5Ljk0LDI1Mi45MmMtMjUuOTQsMC00Ni45OC0yMS4wMy00Ni45OC00Ni45N3MyMS4wMy00Ni45Nyw0Ni45OC00Ni45Nyw0Ni45NywyMS4wMyw0Ni45Nyw0Ni45Ny0yMS4wMyw0Ni45Ny00Ni45Nyw0Ni45N1oiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==" alt="" />
        {
          menu.map(m =>(
            <div key={m.name} className="text-gray-700 font-bold items-center flex hover:text-blue-800 gap-2 cursor-pointer">
              <span>{m.name} v</span>
            </div>
          ))
        }

        <button className="bg-red-900 text-white w-50 rounded p-2 cursor-pointer">Solicitar demostracion</button>
        <button className="border-amber-800 border-2 rounded p-2 hover:bg-orange-300 cursor-pointer">Comenzar gratis</button>
      </menu>
    </header>
  )
}

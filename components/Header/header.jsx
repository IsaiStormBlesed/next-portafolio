import Link from 'next/link'

import { DiCssdeck } from 'react-icons/di'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai'

export default function Header() {
  return (
    <div className="text-white md:flex justify-around items-center gap-2 max-w-7xl min-w-min mt-4 p-4">
      <div className="flex flex-row content-center">
        <Link href="/">
          <a className="flex items-center">
            <DiCssdeck size="3rem" /> <span>Portafolio</span>
          </a>
        </Link>
      </div>

      <div>
        <ul className="flex md:justify-around md:mt-0 gap-4 mt-5 justify-center">
          <li>
            <Link href="/projects">
              <a className="text-sm md:text-xl opacity-75 leading-8 transition duration-500 ease-linear hover:opacity-100 cursor-pointer">
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/stack">
              <a className="text-sm md:text-xl opacity-75 leading-8 transition duration-500 ease-linear hover:opacity-100 cursor-pointer">
                Technologies
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-sm md:text-xl opacity-75 leading-8 transition duration-500 ease-linear hover:opacity-100 cursor-pointer">
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex md:justify-between md:gap-8 justify-center gap-4 mt-2 md:mt-0">
        <div className="transition ease-in rounded-md opacity-75 hover:opacity-100 hover:scale-105">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <AiFillGithub size="1.5rem" />
          </a>
        </div>
        <div className="transition ease-in rounded-md opacity-75 hover:opacity-100 hover:scale-105">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <AiFillLinkedin size="1.5rem" />
          </a>
        </div>
        <div className="transition ease-in rounded-md opacity-75 hover:opacity-100 hover:scale-105">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <AiFillTwitterCircle size="1.5rem" />
          </a>
        </div>
      </div>
    </div>
  )
}

'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useThemeContext } from '../theme-context';

type Links = {
  key: string;
  href: string;
  label: string;
  pathname?: string;
};

const links: Links[] = [
  { key: 'home', href: '/', label: 'Home' },
  { key: 'gallery', href: '/gallery', label: 'Gallery' },
  { key: 'activities', href: '/activities', label: 'Activities' },
];

const NavItem = (props: Links) => {
  return (
    <li
      className={`rounded-none ${
        props.pathname === props.href && 'border-b-2 border-yellow-500'
      }`}
    >
      <Link className=" rounded-none" href={props.href}>
        {props.label}
      </Link>
    </li>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useThemeContext();
  const pathname = usePathname();

  const handleMode = () => {
    theme === 'winter' ? setTheme('night') : setTheme('winter');
  };

  return (
    <>
      <div className="navbar bg-base-100  sticky top-0 md:px-20 z-10">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {links.map((link) => (
                <NavItem key={link.key} href={link.href} label={link.label} />
              ))}

              <li>
                <Link
                  href="/contact"
                  className="btn btn-ghost w-full p-2 rounded-none"
                >
                  Reach Us
                </Link>
              </li>
              <div
                className={`btn btn-ghost ${
                  theme === 'winter'
                    ? 'text-yellow-500 border-yellow-500'
                    : 'text-blue-800 border-blue-800'
                }`}
                onClick={handleMode}
              >
                {theme === 'winter' ? (
                  <Icon icon="ic:baseline-light-mode" className="text-xl" />
                ) : (
                  <Icon icon="ic:baseline-dark-mode" className="text-xl" />
                )}
              </div>
            </ul>
          </div>
          <a className="btn btn-ghost p-0" href="/">
            <Image alt="logo" src="/logo.png" width="30" height="30" />
            <h1 className="md:text-2xl text-xl ">Pearl Division Youths</h1>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-3">
            {links.map((link) => (
              <NavItem
                key={link.key}
                href={link.href}
                label={link.label}
                pathname={pathname}
              />
            ))}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-5">
          <Link
            className={`${
              pathname === '/contact'
                ? 'btn-primary bg-yellow-400 text-gray-950 border-none'
                : 'btn-outline border-2  border-yellow-400 text-yellow-400'
            } rounded-none btn hover:bg-yellow-400 hover:text-gray-950 hover:border-yellow-400 invisible sm:visible`}
            href="/contact"
          >
            Reach Us
          </Link>
          <div
            className={`btn btn-ghost ${
              theme === 'winter'
                ? 'text-yellow-500 border-yellow-500'
                : 'text-blue-800 border-blue-800'
            }`}
            onClick={handleMode}
          >
            {theme === 'winter' ? (
              <Icon icon="ic:baseline-light-mode" className="text-xl" />
            ) : (
              <Icon icon="ic:baseline-dark-mode" className="text-xl" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

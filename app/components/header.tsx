import Link from 'next/link';
import LinkedInIcon from './icons/linkedin-icon';
import GithubIcon from './icons/github-icon';
import HamburgerIcon from './icons/hamburger-icon';
import NavLink from './nav-link';

export default function Header() {
  return (
    <header className='px-8'>
      <div className='m-auto flex h-20 max-w-4xl items-center justify-between gap-8'>
        <div className='flex items-baseline gap-8'>
          <Link href='/' className='text-lg font-bold'>
            <span className='hidden sm:inline'>Adrian </span>Dobrzański
          </Link>

          <nav className='hidden gap-5 sm:inline-flex'>
            <NavLink href='/'>Latest</NavLink>
          </nav>
        </div>

        <section className='hidden gap-4 sm:flex'>
          <Link href='https://linkedin.com/in/adrian-kamil-dobrzanski'>
            <LinkedInIcon />
          </Link>
          <Link href='https://gituhb.com/adobrzanski'>
            <GithubIcon />
          </Link>
        </section>

        <div className='relative block self-center rounded-full bg-slate-500 bg-opacity-0 p-2 hover:bg-opacity-10 sm:hidden'>
          <HamburgerIcon />
        </div>
      </div>
    </header>
  );
}

import NavLink from "./nav-link";

export default function Header() {
  return (
    <header className='flex items-baseline gap-24 px-8 py-4 '>
        <NavLink href='/'> Adrian Dobrzański </NavLink>
        <nav className='flex gap-5'>
            <NavLink href='/'>Latest</NavLink>
        </nav>
    </header>
  );
}
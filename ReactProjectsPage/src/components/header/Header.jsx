import Nav from './nav/Nav'

const Header = () => {
  return (
		<div className="bg-secondary-color sticky top-0 pt-6 z-10 transition-all duration-300 ease-linear">
			<Nav />
		</div>
  );
}

export default Header

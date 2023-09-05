import Image from 'next/image';
import MainMenu from './MainMenu';
import LogoSmall from './logo_temp_small.png';
import MainCta from './MainCta';

const MainHeader = () => (
  <header className="w-full flex justify-around items-center pt-6 pb-2">
    <MainMenu />
    <Image src={LogoSmall} alt="Brisa Cleaning Logo" height={50} width={50} />
    <MainCta />
  </header>
);

export default MainHeader;

import PrimaryCTAButton from '@components/UI/Buttons/PrimaryCTAButton';
import { SparklesIcon } from '@heroicons/react/24/outline';

const MainCta = () => (
  <nav>
    <PrimaryCTAButton>
      Get Started <SparklesIcon className="h-4 w-4 ml-2" />
    </PrimaryCTAButton>
  </nav>
);

export default MainCta;

import PrimaryGradientButton from '@components/UI/Buttons/PrimaryGradientButton';
import { SparklesIcon } from '@heroicons/react/24/outline';

const MainCta = () => (
  <PrimaryGradientButton>
    Get Started <SparklesIcon className="h-4 w-4 ml-2" />
  </PrimaryGradientButton>
);

export default MainCta;

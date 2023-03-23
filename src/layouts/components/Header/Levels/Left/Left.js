import Button from '~/components/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '~/components/Icons';

function Left() {
  return (
    <div className="bg-white grow">
      <Button>
        <ArrowLeftIcon width={'24px'} />
      </Button>
      <Button>
        <ArrowRightIcon width={'24px'} />
      </Button>
      <div>Left</div>
    </div>
  );
}

export default Left;

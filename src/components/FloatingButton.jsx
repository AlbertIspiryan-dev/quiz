import CupIcon from './icons/CupIcon'
import { Link } from 'react-router-dom';

export default function FloatingButton() {
  return (
    <Link
      to="/results"
      className="fixed bottom-4 right-4 cursor-pointer size-16 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center text-white"
    >
      <CupIcon />
    </Link>
  );
}

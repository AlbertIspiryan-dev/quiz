export default function Tooltip({ children, variant, ...props }) {
  let classes = 'bg-primary-light'
  
  switch (variant) {
    case 'medium':
      classes = 'bg-yellow'
      break;
    case 'hard':
      classes = 'bg-orange'
      break;
  }

  return (
    <span className={`inline-flex items-center text-white justify-center capitalize w-[100px] h-[37px] rounded-s-sm rounded-br-lg ${classes}`} {...props}>
      {children}
    </span>
  );
}

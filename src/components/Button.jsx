export default function Button({ children, disabled, ...props }) {
  const classes = !disabled ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-neutral-50 text-gray-400 cursor-not-allowed'
  
  return (
    <button
      {...props}
      type="button"
      className={`px-5 py-4 font-semibold rounded-lg cursor-pointer ${classes}`}
    >
      {children}
    </button>
  );
}

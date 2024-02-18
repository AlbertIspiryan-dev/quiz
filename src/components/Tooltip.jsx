export default function Tooltip({ children, ...props }) {
  return <p className="text-red-500" {...props}>{children}</p>;
}

export default function Title({ children, classes }) {
  return (
    <h1 className={`text-5xl font-bold text-primary ${classes}`}>
      {children}
    </h1>
  );
}

export default function Paragraph({ children, classes }) {
  return (
    <p className={`text-3xl font-bold text-slate-900 ${classes}`}>
      {children}
    </p>
  );
}

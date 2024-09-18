export default function Parrafo({ children, text }) {
  if (text != null) {
    return <p style={{ color: "red" }}>{text}</p>;
  }

  return (
      <p>{children}</p>
  );
}

import "./App.css";

export default function Link({ srcImagen, href, alt, className }) {
  return (
    <a href={href} target="_blank">
      <img src={srcImagen} className={className} alt={alt} />
    </a>
  );
}

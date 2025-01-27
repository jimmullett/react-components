import "./Card.css"

export default function Card({title, icon, backgroundColor, children}) {
  return (<>
    <article className="card">
      <div className="icon" style={{backgroundColor: backgroundColor}}>
        <img src={icon} alt="card icon" />
      </div>
      <h1>{title}</h1>
      <p>{children}</p>
    </article>
  </>)
}
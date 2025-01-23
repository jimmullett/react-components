import "./Badge.css"

export default function Badge({color, pill = false, children}) {

  return (
    <span className={`badge ${color} ${pill ? "pill" : null}`}>{children}</span>
  )
}
import "./Banner.css"
import successIcon from '/src/assets/success.svg'
import warningIcon from '/src/assets/warning.svg'
import errorIcon from '/src/assets/error.svg'
import infoIcon from '/src/assets/info.svg'

export default function Banner({children = null, status = "info", title}) {

  const icons = {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
    info: infoIcon
  }

  
  return (
    <div className={`banner ${status}`}>
      <img src={icons[status]} />
      <div className={"banner-content"}>
        <h1>{title}</h1>
        {children && <p>{children && children}</p>}
      </div>
    </div>)
}
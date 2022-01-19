import '../styles/App.scss';
const Link =(props)=>{
    return (
        <li className="menu-item">
            <a href="#" title="Blog" className="menu-link">
              {props.text}
            </a>
          </li>
    )
}

export default Link;
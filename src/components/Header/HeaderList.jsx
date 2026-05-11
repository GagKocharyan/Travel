export const HeaderList = ({list}) => {
    return(
        <ul className="header-list">
            {list.map((item) => (
                <li className="header-list-item">
                    <a className="header-list-link" href={item.path}>
                        <div className="header-list-image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        {item.label && <span>{item.label}</span>}
                    </a>
                </li>
            ))}
        </ul>
    )
}
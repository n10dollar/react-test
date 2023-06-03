
interface Props{
    categories: string[];
}
function CategorySelector({categories}: Props) {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" type="button">
                Categories
            </button>
            <ul className="dropdown-menu">
                {categories.map((category, index) => (
                    <li key={index}>
                        <a className="dropdown-item">{category}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategorySelector;
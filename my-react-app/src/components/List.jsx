import styles from "./List.module.css"
import PropTypes from "prop-types"

function List(props){
    const items = props.items

    // Sorting alphabetically and numerically 
    //items.sort((a,b)=> a.name.localeCompare(b.name));
    //items.sort((a,b)=> a.calories - b.calories);

    // Using filter
    //const lowCalfruits = items.filter((item) => item.calories<100)

    const itemsList = items.map((item) => (<li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>))

    return(<div className={styles.list}>
        <h2>{props.category}</h2>
        <ul>{itemsList}</ul>
    </div>)
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))
}

export default List;
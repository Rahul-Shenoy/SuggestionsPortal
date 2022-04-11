const SelectedItem = ({id, value, removeSelection}) => {
    return <div>
        <span>{ value }</span>
        <span onClick={() => removeSelection(id)}>&times;</span>
    </div>
}

export default SelectedItem;
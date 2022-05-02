const SelectedItem = ({id, text, removeSelection}) => {
    return <span className="chosen-item"> { text }
      <span className="chosen-item-delete" onClick={() => removeSelection(id)}>×</span>
    </span>
}

export default SelectedItem;
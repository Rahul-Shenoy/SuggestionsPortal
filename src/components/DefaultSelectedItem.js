const SelectedItem = ({id, value, removeSelection}) => {
    return <span class="chosen-item"> { value }
          <span class="chosen-item-delete" onClick={() => removeSelection(id)}>×</span>
        </span>
}

export default SelectedItem;
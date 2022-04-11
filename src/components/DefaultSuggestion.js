const DefaultSuggession = ({id, value, insertSelection}) => {
    return <div className="suggestion" onClick={(e) => insertSelection(id, value)}>{value}</div>
}

export default DefaultSuggession;
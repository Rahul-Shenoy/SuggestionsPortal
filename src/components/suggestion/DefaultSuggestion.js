const DefaultSuggession = ({text, obj, insertSelection}) => {
    return <div className="suggestion" onClick={(e) => insertSelection(obj)}>{text}</div>
}

export default DefaultSuggession;
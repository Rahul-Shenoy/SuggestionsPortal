import React, { useState, useCallback } from 'react';
import '../App.css';
import { debounce } from '../utils/utils'
import SelectedItem from './DefaultSelectedItem';
import DefaultSuggestionComponent from './DefaultSuggestion'

const SuggestionBox = ({
  keyAttr, 
  valueAttr, 
  queryFunc,
  multiSelect, 
  SuggestionComponent=DefaultSuggestionComponent
}) => {
  const [inputQuery, setInputQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selections, setSelections] = useState([]);

  const reloadSuggestions = (query) => {
    const results = queryFunc(query)
    setSuggestions(results);
  };

  const memoedUpdate = useCallback(debounce(reloadSuggestions), [])

  const handleChange = (inputVal) => {
    setInputQuery(inputVal);
    memoedUpdate(inputVal);
  }

  const insertSelection = (id, value) => 
  {
    setSelections([...selections, {id, value}])
    setSuggestions([]);
    setInputQuery("")
  }

  const removeSelection = (id) => {
    setSelections(selections.filter(selection => selection.id !== id))
  }

  const getKey = (item) => item[keyAttr] !== undefined ? item[keyAttr] : item;

  const getValue = (item) => item[valueAttr] !== undefined ? item[valueAttr] : item;

  return (
    <div className="suggestion-box">
      <div className='container'>
        <div className='input-box'>
          <input value={inputQuery} className='query-box' type="text" 
          onChange={(e) => handleChange(e.target.value)} />
        </div>
      </div>
      {suggestions && suggestions.length > 0 && 
        <div className='suggestions'>
        {
          suggestions.filter(suggestion => !selections.find((x) => x["id"] === getKey(suggestion))).map(suggestion => 
            <SuggestionComponent key={getKey(suggestion)} id={getKey(suggestion)} value={getValue(suggestion)} insertSelection={insertSelection}/>
          )
        }
        </div>
      }
      <div>
        {selections.map(s => <SelectedItem key={s["id"]} id={s["id"]} value={s["value"]} removeSelection={removeSelection}/>)}
      </div>
    </div>
  );
}

export default SuggestionBox;

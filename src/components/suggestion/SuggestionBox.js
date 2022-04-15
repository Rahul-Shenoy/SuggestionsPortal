import React, { useState, useCallback, useRef, useEffect } from "react";
import "../../App.css";
import { debounce } from "../../utils/utils";
import SelectedItem from "./DefaultSelectedItem";
import DefaultSuggestionComponent from "./DefaultSuggestion";

const SuggestionBox = ({
  keyAttr,
  valueAttr,
  queryFunc,
  multiSelect,
  onChange,
  SuggestionComponent = DefaultSuggestionComponent
}) => {
  const [inputQuery, setInputQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selections, setSelections] = useState([]);
  const inputRef = useRef(null);
  ``;
  const reloadSuggestions = (query) => {
    queryFunc(query).then((results) => {
      console.log(results);
      setSuggestions(results);
    });
  };

  const memoedUpdate = useCallback(debounce(reloadSuggestions), []);

  useEffect(() => {
    focusInput();
    multiSelect ? onChange(selections) : onChange(selections[0]);
  }, [selections]);

  const handleChange = (inputVal) => {
    setInputQuery(inputVal);
    memoedUpdate(inputVal);
  };

  const optionSelected = (obj) => {
    setSelections([...selections, obj]);
    setSuggestions([]);
    multiSelect ? setInputQuery("") : setInputQuery(getValue(obj));
  };

  const removeSelection = (id) => {
    setSelections(selections.filter((selection) => getKey(selection) !== id));
  };

  const focusInput = () => inputRef.current.focus();

  const getKey = (item) => (item[keyAttr] !== undefined ? item[keyAttr] : item);

  const getValue = (item) =>
    item[valueAttr] !== undefined ? item[valueAttr] : item;

  return (
    <div className="suggestion-box">
      <div className="container">
        <div className="input-box" onClick={() => focusInput()}>
          {multiSelect &&
            selections.map((s) => {
              console.log(s);
              return (
                <SelectedItem
                  key={getKey(s)}
                  id={getKey(s)}
                  text={getValue(s)}
                  removeSelection={removeSelection}
                />
              );
            })}
          <input
            value={inputQuery}
            className="query-box"
            type="text"
            ref={inputRef}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      {suggestions && suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions
            .filter(
              (suggestion) =>
                !selections.find((x) => getKey(x) === getKey(suggestion))
            )
            .map((suggestion) => (
              <SuggestionComponent
                key={getKey(suggestion)}
                id={getKey(suggestion)}
                text={getValue(suggestion)}
                obj={suggestion}
                insertSelection={optionSelected}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default SuggestionBox;

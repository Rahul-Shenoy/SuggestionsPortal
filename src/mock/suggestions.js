import words from 'an-array-of-english-words';
 
export function Query(query) {
    console.log(query)
    if(query.length > 2) {
        // const rQuery = new RegExp(query); //rQuery.test(d));
        return words.filter(d => d.substring(0, query.length) === query) 
    }
    return [];
}

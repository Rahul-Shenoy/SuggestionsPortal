import words from 'an-array-of-english-words';
 
export function Query(query) {
    console.log(query)
    const results = words.filter(d => d.substring(0, query.length) === query);
    return new Promise((resolve, reject) => {
        setTimeout(()  => resolve(results), 2000);
    });
}
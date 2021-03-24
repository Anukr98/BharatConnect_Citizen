export const fetchHelper = async (url , object , callback) => {
    fetch(url,object)
    .then(res => res.json())
    .then(response => {
        callback(null , response)
    })
    .catch(e => alert('Something went terribly wrong on our end!'))
}
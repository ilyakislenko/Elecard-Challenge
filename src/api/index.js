export const getData = async() =>{
    const url = 'http://contest.elecard.ru/frontend_data/catalog.json'
const response = await fetch(url,{
    method:"GET"
});
if (response.ok){
    return response.json()
}
else {
    throw Error(response.Error)
}
}

export const getPlaceName = (results) => {

    const data = {
        name: null,
        address: null,
    }

    if(results == undefined || results.length == 0){
        return data;
    }

    if(results[0].name != undefined){
        data.name = results[0].name
    }

    data.address = results[0].formatted_address
    
    return data
}

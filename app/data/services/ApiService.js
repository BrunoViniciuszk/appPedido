const api = 'http://10.92.198.13:3002/api/apppedidos/';

export const ApiService ={

    get(endpoint){
        return fetch(`${api}${endpoint}`)
        .then(response => response.json())
    },

    post(endpoint, data){
        return fetch(`${api}${endpoint}`,
        {
            method: 'POST',
            headers:{'Content-type': 'application/json'},
            body:JSON.stringify(data)
        })

        .then(response => response.json())
    }
}
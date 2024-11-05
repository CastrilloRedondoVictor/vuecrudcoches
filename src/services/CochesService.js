import Global from "@/Global";

export default class CochesService {
    getCoches() {
        return new Promise(function(resolve, reject) {
            let request = 'api/Coches';
            fetch(Global.apiCoches + request)
                .then(response => {
                    if (!response.ok) throw new Error("Error fetching coches");
                    return response.json();
                })
                .then(data => {
                    setTimeout(() => {
                        resolve(data);  // `data` is the JSON-parsed response
                    }, 1000);
                })
                .catch(error => reject(error));
        });
    }

    postCoche(data) {
        return new Promise(function(resolve, reject) {
            let request = 'api/Coches/InsertCoche';
            fetch(Global.apiCoches + request, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) throw new Error("Error posting coche");
                    return response.text().then(text => text ? JSON.parse(text) : {});
                })
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    getCoche(id) {
        return new Promise(function(resolve, reject) {
            let request = `api/Coches/FindCoche/${id}`;
            fetch(Global.apiCoches + request)
                .then(response => {
                    if (!response.ok) throw new Error("Error fetching coche");
                    return response.json();
                })
                .then(data => {
                    setTimeout(() => {
                        resolve(data);
                    }, 1000);
                })
                .catch(error => reject(error));
        });
    }

    updateCoche(data) {
        return new Promise(function(resolve, reject) {
            let request = 'api/Coches/UpdateCoche';
            fetch(Global.apiCoches + request, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (!response.ok) throw new Error("Error updating coche");
                
                    return response.text().then(text => text ? JSON.parse(text) : {});
                })
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
    

    deleteCoche(id) {
        return new Promise(function(resolve, reject) {
            let request = `api/Coches/DeleteCoche/${id}`;
            fetch(Global.apiCoches + request, {
                method: "DELETE"
            })
                .then(response => {
                    if (!response.ok) throw new Error("Error deleting coche");
                    return response.text().then(text => text ? JSON.parse(text) : {});
                })
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }
}

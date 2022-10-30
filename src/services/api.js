import axios from "axios";

const api = axios.create({
    baseURL: "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br"
});

api.interceptors.request.use(async config => {
    // config.headers['Access-Control-Allow-Origin'] = '*';
    // config.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
    // config.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
    //delete cache
    // config.headers['Cache-Control'] = 'no-cache';
    // config.headers['Pragma'] = 'no-cache';
    // config.headers['Expires'] = '0';

    return config;
});

export default api;
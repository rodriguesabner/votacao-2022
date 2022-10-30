import axios from "axios";

const api = axios.create({
    baseURL: "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br"
});

export default api;
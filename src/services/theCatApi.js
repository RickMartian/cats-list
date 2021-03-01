import axios from "axios";

export const fetchCats = async ({ limit, size }) => {
    const url = `${process.env.VUE_APP_BASE_CATS_API_URL}/images/search?limit=${limit}&size=${size}`;
    const response = await axios.get(url, {
        headers: {
            "x-api-key": process.env.VUE_APP_CATS_API_KEY
        }
    });
    if (!response.data) {
        throw new Error("Erro ao buscar imagem.");
    }
    return response.data;
}
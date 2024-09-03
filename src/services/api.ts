import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getCharacterId = async (id: string) => {
    const response = await api.get(`/character/${id}`)
    return response.data
}

export const getCharacters = async () => {
        const response = await api.get('/character')
        return response.data.results
}


export const getLocationId = async (id: string) => {
    const response = await api.get(`/location/${id}`);
    return response.data;
}

export const getLocations = async () => {
    const response = await api.get('/location');
    return response.data.results;
}

export const getEpisodeId = async (id: string) => {
    const response = await api.get(`/episode/${id}`);
    return response.data;
}

export const getEpisodes = async () => {
    const response = await api.get('/episode');
    return response.data.results;
}


export default api;
import axios from "axios";
const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        lenguage: 'es',
        country: 'mx',
        proximity: 'ip',
        access_token: 'pk.eyJ1IjoiY2F0YTIzMyIsImEiOiJjbGFxNnlkOXcwMW1xM3Z0Yjh5dTl0cnRyIn0.Ms8XWu3bQngoP_56f98jWA',
    }

})

const fetch = async () => {
    const res = await searchApi.get(`/$Tecnologico.json`);
    console.log(res.data);
}
fetch();

import { API_KEY } from "../constants/config";

export class MovieAPI {
    static fetchPopularShows = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    }

    static fetchRecommendationsByShowId = async (id: string) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    }

    static fetchShowById = async (id: string) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}&?api_key=${API_KEY}&append_to_response=credits`);
        const data = await response.json();
        return data.results;
    }

    static fetchShowByTitle = async (title: string) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv$?api_key=${API_KEY}&query=${title}`);
        const data = await response.json();
        return data.results;
    }
};
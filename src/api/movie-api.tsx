import { API_KEY } from "../constants/config";

export const MovieAPI = () => {
    const fetchPopularShows = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);
        const results = await response.json();
        return results.results();
    }

    const fetchRecommendationsByShowId = async (id: string) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`);
        const results = await response.json();
        return results.results();
    }

    const fetchShowById = async (id: string) => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}&?api_key=${API_KEY}&append_to_response=credits`);
        const results = await response.json();
        return results.results();
    }

    const fetchShowByTitle = async (title: string) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv$?api_key=${API_KEY}&query=${title}`);
        const results = await response.json();
        return results.results();
    }
};
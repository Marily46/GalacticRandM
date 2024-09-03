import { useReducer, useEffect } from 'react';
import api from '../services/api';

interface State<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

type Action<T> =
    | { type: 'FETCH_SUCCESS'; payload: T }
    | { type: 'FETCH_ERROR'; payload: string }
    | { type: 'FETCH_INIT' };

const initialState = <T>(): State<T> => ({
    data: null,
    loading: true,
    error: null,
});

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, data: action.payload, loading: false };
        case 'FETCH_ERROR':
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};

const useApi = <T,>(endpoint: string): State<T> => {
    const [state, dispatch] = useReducer<React.Reducer<State<T>, Action<T>>>(reducer, initialState<T>());

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });
            try {
                const response = await api.get<T>(endpoint);
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            } catch (error) {
                if (error instanceof Error) {
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                } else {
                    dispatch({ type: 'FETCH_ERROR', payload: 'An unknown error occurred' });
                }
            }
        };

        fetchData();
    }, [endpoint]);

    return state;
};

export default useApi;

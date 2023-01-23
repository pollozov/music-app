import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '2557dd52ebmsha5b0ed9011250b0p185bdejsn39fddf6cc49c');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` })
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;
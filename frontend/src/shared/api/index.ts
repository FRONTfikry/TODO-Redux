import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { TASKS } from './tags'


export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: [TASKS],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api'}),
    endpoints: () => ({})
})


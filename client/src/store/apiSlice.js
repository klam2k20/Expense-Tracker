import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = 'https://localhost:8080';

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({

    /**
     * When you invalidate a tag RTK Query will automatically
     * refetch the endpoints that were marked with that tag.
     * So when addTransaction or deleteTransaction is run
     * any queries with the transactions tag will automatically
     * be refreshed
     */

    // GET Categories
    getCategories: builder.query({
      // Query is by default GET
      query: () => 'api/categories',
      providesTags: ['categories'],
    }),

    // GET Labels
    getLabels: builder.query({
      query: () => 'api/labels',
      providesTags: ['transactions'],
    }),

    // POST Transactions
    addTransaction: builder.mutation({
      query: (transaction) => ({
        url: '/api/transactions',
        method: 'POST',
        body: transaction,
      }),
      invalidatesTags: ['transactions'],
    }),

    // DELETE Transactions
    deleteTransaction: builder.mutation({
      query: (id) => ({
        url: 'api/transactions',
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['transactions'],
    }),
  }),
});

export default apiSlice;

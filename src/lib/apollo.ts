import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
   
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjI2OTMyMTYsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2w0cG1jdXEyMXZ5NDAxeHg4MDNrYXA4NC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZmRjMzc2NGQtZGQxZS00NDBlLTgxMDMtMDJlN2ZmOTI4MTU5IiwianRpIjoiY2w3dHdtMHNhMGFzeDAxcnIwYmVuM21hbiJ9.KlyczJAYuEM-aiHi8LlGvJAYQUZ6vONtSTKRV9SmxDLZE7eNFfejrXy5dpSRUnvOGssb5N9GXJ-Z4-sVhZKnE6trsIeSga1ddS276_KqrsLbWN8X5XzndO7dHenANQY5tOZVterOChsGNxOApcVDTh__YyqHt7LCqgoMg2wsH2DfsCX_uXnKe3PYwhvfFCS9NBZUROZGwTSskHecv0q7if5xn3_ZMEjzrq-uxHUJB8tGumB42_4Tq0NYk3k8fDtZUEJXPpWQeOhFcPgtp-BZNJEgDG4iOB4-DcbzAVKrVLdTFRicN9v7GbSA1pbI7uXTmnzzJ_Te1Ruh-Sp-wn_FNqkuOhqkrvjrx3mCTG-Oifx-u40THKOsMm_NNAuAYuGFF3Ok0iEU6jRwOP_MTYyuLYKQd2GjJW7s0duitliuxNUnTBJRMVQU7iR22bzb4lfobOlcUtHlsGKVzKmsEl0BidBiHnoqQmvicmM_aLFNjffZzfr8WbjuSCj3Ccxa6A0tiq4uWks-vUJDnGHecphsDjbz-JbxPO4MCtNwn_GriA9WyfQYoPfMzJtqn5FjQ5MYIHlwL71rHK8Z4R0P2ZCfIfMtUi99bSVdSuFjQnA6mcKoYhPnNemQN8BPbx6L5UYZsvllNAo831nZdTfRXx_gvVJWp9Aupo7S0AR8Az6kaTo' 
    },

    cache: new InMemoryCache()
})
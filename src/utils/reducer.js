import { reducerCases } from "./constant";

export const initialState = {
    token: null,
    playlists: [],
    userInfo: null,
    selectedPlaylistId: "0WOEuOcgwj7DWr3kdfMHFn",
    selectedPlaylist: null,
}
const reducer = (state,action) => {
    switch (action.type){
        case reducerCases.SET_TOKEN : {
            return {
                ...state,
                token:"BQAuDV2gmvA16eTkJztHp3ARV7GBCC0qV5m6_ycLUB8o0MS83cfwxreZ-k0SkrguV7YW8Eqsj422ulFdGXxwV_RTObwwGqIB-5SicQEEaiSGdzJ_nEZ0fPGzCEMuYv01LM-b_aA7tB7TfUcNYq0h4KlLQh82F3razysMc6Pdfq4QtlH9C_tBoFNkfeOlHmp0FITobeFucx1p81UGhmNdLdA3k_wWLJJZG2qssKOe20-cOVuluTiVkdnShEcmOgXoycAocNrom1U",
            };
        }
        case reducerCases.SET_PLAYLISTS: {
            return {
                ...state,
                playlists: action.playlists,
            };  
        }
        case reducerCases.SET_USER : {
            return {
                ...state,
                userInfo: action.userInfo,
            };
        }
        case reducerCases.SET_PLAYING: {
            return {
                ...state,
                currentPlaying: action.currentPlaying,
            };
        }
        case reducerCases.SET_PLAYLIST: {
            return{
                ...state,
                selectedPlaylist:action.selectedPlaylist,
            }
        }
        case reducerCases.SET_CONTEXT_URI: {
            return {
                ...state,
                contextUri: action.contextUri,
            };
        }
       
        default:
            return state;
     }
};

export default reducer;
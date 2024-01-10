// eslint-disable-next-line import/no-anonymous-default-export
import { Create, Delete, FetchAll, Update,Like } from '../constants/actiontypes';
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [] , action) => {
    switch (action.type) {
        case FetchAll:
            return action.payload;
        case Create:
            return [...posts,action.payload];
        case Update:
        case Like:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case Delete:
            return posts.filter((post) => post._id !== action.payload);
            default:
         return posts;
    }
}

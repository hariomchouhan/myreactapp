export const ScoreReducer=(state=0, action)=>{
    switch(action.type){
        case 'INCREMENT': return state+4;
        case 'DECREMENT': return state-1;
        default: return state;
    }
}
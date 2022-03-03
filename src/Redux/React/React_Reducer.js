import * as actionTypes from './React_Type';
const initial_state = {
    reactmembers:[ {
        id:1,
        name:"react ma ma",
        email:"mama@gmail.com",
        number:1234567890
    },
    {
        id:2,
        name:"react Ko Ko",
        email:"koko@gmail.com",
        number:741258963
    },
    {
        id:3,
        name:"react myo myo",
        email:"myomyo@gmail.com",
        number:321456987
    }] ,//{id, name, email,number}
}

const React_Reducer =(state=initial_state, action) =>{
    switch(action.type)
    {
         case actionTypes.Current_React_Member:
             return state;
         default:
            return state;
     }
}

export default React_Reducer;
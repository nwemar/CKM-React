import * as actionTypes from './CSharpType';

const initial_state = {
    csharpmembers:[ {
        id:1,
        staffcode:'PG-115',
        name:"Ei Thinzar Zaw",
        loginname:'etzz',
        password:'12345',
        confirmpassword:'12345',
        email:"capital.eithinzarzaw@gmail.com",
        phonenumber:'09 9654 59497',
        skypeid:'capital-eithinzarzaw',
        githubid:'capital_eithinzarzaw',
        dob:'12/20/1992',
        gender:'female',
        address:'Yangon',
        photo:'https://drive.google.com/uc?export=view&id=1DyqZN6GVGPO_H1z9gcQdoTlQjEhHRSXj'
    },
    {
        id:2,
        staffcode:'PG-132',
        name:"Yin Mon Oo",
        loginname:'ymo',
        password:'12345',
        confirmpassword:'12345',
        email:"capital.yinmonoo@gmail.com",
        phonenumber:'09 7896 17201	',
        skypeid:'capital.yinmonoo@gmail.com',
        githubid:'capital-yinmonoo',
        dob:'06/07/1995',
        gender:'female',
        address:'Yangon',
        photo:'https://drive.google.com/uc?export=view&id=1DyqZN6GVGPO_H1z9gcQdoTlQjEhHRSXj'
    },
    {
        id:3,
        staffcode:'PG-138',
        name:"Phyoe Thura Kyaw",
        loginname:'ptk',
        password:'12345',
        confirmpassword:'12345',
        email:"capital.phyoethurakyaw@gmail.com",
        phonenumber:'09 7964 95193',
        skypeid:'capital.phyoethurakyaw@gmail.com',
        githubid:'capital.phyoethurakyaw@gmail.com',
        dob:'07/14/1994',
        gender:'male',
        address:'Yangon',
        photo:'https://drive.google.com/uc?export=view&id=1DyqZN6GVGPO_H1z9gcQdoTlQjEhHRSXj'
    },
    {
        id:4,
        staffcode:'PG-142',
        name:"Myint Myint Yi",
        loginname:'mmy',
        password:'12345',
        confirmpassword:'12345',
        email:"capital.myintmyintyi@gmail.com",
        phonenumber:'09 2560 96302',
        skypeid:'capital.myintmyintyi@gmail.com',
        githubid:'MieMie-mm',
        dob:'08/24/1995',
        gender:'female',
        address:'Yangon',
        photo:'https://drive.google.com/uc?export=view&id=1DyqZN6GVGPO_H1z9gcQdoTlQjEhHRSXj'
    },
    {
        id:5,
        staffcode:'PG-143',
        name:"Than Zaw Aung",
        loginname:'tza',
        password:'12345',
        confirmpassword:'12345',
        email:"capital.thanzawaung@gmail.com",
        phonenumber:'09 2529 65585',
        skypeid:'capital.thanzawaung@gmail.com',
        githubid:'tz-aung',
        dob:'10/06/1994',
        gender:'male',
        address:'Yangon',
        photo:'https://drive.google.com/uc?export=view&id=1DyqZN6GVGPO_H1z9gcQdoTlQjEhHRSXj'
    },
]
}
// state=initial_state, action
const CsharpReudcer =( state = initial_state, action) =>{
    switch(action.type)
    {
         case actionTypes.ADD_CSHARP_MEMBER:
              return {csharpmembers: [...state.csharpmembers, action.payload]};
         case actionTypes.EDIT_CSHARP_MEMBER:
              const updateState = state.csharpmembers.map((contact)=>
                contact.id === action.payload.id ? action.payload:contact
                );
            state.csharpmembers = updateState;           
              return {csharpmembers: [...state.csharpmembers]};
         default:
            return state;
     }
}

export default CsharpReudcer;
const initial_state = {
    phpmembers:[ {
        id:1,
        staffcode:'PG-154',
        name:"Set Maw Htay",
        loginname:'smh',
        password:'12345',
        confirmpassword:'12345',
        email:"capital.setmawhtay@gmail.com",
        phonenumber:'09 9773 63882 , 09796661458',
        skypeid:'capital.setmawhtay@gmail.com',
        githubid:'Capital-SetMawHtay',
        dob:'04/22/1991',
        gender:'male',
        address:'Yangon',
        photo:'https://drive.google.com/uc?export=view&id=1DyqZN6GVGPO_H1z9gcQdoTlQjEhHRSXj'
    },
    {
        id:2,
        staffcode:'SS-083',
        name:"Naw Hsa Law Eh",
        loginname:'nhle',
        password:'12345',
        confirmpassword:'12345',
        email:"capital.nawhsalaweh@gmail.com",
        phonenumber:'09 4211 02330',
        skypeid:'capital.nawhsalaweh@gmail.com',
        githubid:'capital.nawhsalaweh@gmail.com',
        dob:'04/22/1994',
        gender:'female',
        address:'Yangon',
        photo:'https://drive.google.com/uc?export=view&id=1DyqZN6GVGPO_H1z9gcQdoTlQjEhHRSXj'
    },
    {
        id:3,
        staffcode:'PG-177',
        name:"Cherry Phyo",
        loginname:'cp',
        password:'12345',
        confirmpassword:'12345',
        email:"capital.cherryphyo@gmail.com",
        phonenumber:'09 770659201,09967796717',
        skypeid:'capital.cherryphyo@gmail.com',
        githubid:'capital.cherryphyo@gmail.com',
        dob:'11/04/1996',
        gender:'female',
        address:'Yangon',
        photo:'https://drive.google.com/uc?export=view&id=1DyqZN6GVGPO_H1z9gcQdoTlQjEhHRSXj'
    }
]
}

// state=initial_state, action
const PHPReudcer =( state = initial_state, action) =>{
    switch(action.type)
    {
         default:
            return state;
     }
}

export default PHPReudcer;
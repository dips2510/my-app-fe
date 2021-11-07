const initialState = {
    accountList:[
      { name:'Account 1', accountNumber:'012-3456' },
      { name:'Account 2', accountNumber:'034-5678' },
      { name:'Account 3', accountNumber:'056-7890' },
      { name:'Account 4', accountNumber:'078-9012' },
      { name:'Account 5', accountNumber:'090-1234' },
    ],
    accountHistory:[
      { date:'03 Oct 2021', action:'DEBIT', amount:'76.45', currency:'USD', description:'Lunch with John', from:'056-7890', to:'090-1234' },
      { date:'03 Oct 2021', action:'CREDIT', amount:'76.45', currency:'HKD', description:'Lunch with Dips', from:'056-7890', to:'090-1234' },
    ]
  };
  
  export default initialState;
  
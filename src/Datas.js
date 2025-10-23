let datas = [
    {
        "month": 'January',
        "sale": 2435,
    },
    {
        "month": 'February',
        "sale": 3245,
    },
    {
        "month": 'June',
        "sale": 4945,
    },
    {
        "month": 'July',
        "sale": 4300,
    },
    {
        "month": 'Agust',
        "sale": 2190,
    },
    {
        "month": 'Sep',
        "sale": 3100,
    },
    {
        "month": 'Oct',
        "sale": 9800,
    },
    {
        "month": 'Dev',
        "sale": 6789,
    },
   
   
];


let newMembers = [
    {id: 1, userName: 'ALiot Alderson', userTitle: 'Hacker', img: 'adminImages/admin.png'},
    {id: 2, userName: 'Darlin Alderson', userTitle: 'Hacker', img: 'adminImages/admin3.png'},
    {id: 3, userName: 'Angela Moss', userTitle: 'Saftey Manager', img: 'adminImages/admin4.png'},
]

let transActions = [
    {id: 1, name: 'Aliot Alderson', date: '03/09/07', amount: 2_000, status: 'Approved', img: 'adminImages/admin2.png'},
    {id: 1, name: 'Darlin Alderson', date: '03/09/07', amount: 1_000, status: 'Declined', img: 'adminImages/admin3.png'},
    {id: 1, name: 'Angela moss', date: '03/04/02', amount: 3_400, status: 'Pending', img: 'adminImages/admin4.png'},
]

let userRows = [
    {id: 1, userName: 'Aliot Alderson', avatar: 'adminImages/admin2.png', email: 'alderson@gmail.com', status: 'active', transaction: '$134.00'},
    {id: 2, userName: 'Dari Alderson', avatar: 'adminImages/admin3.png', email: 'darlinalderson@gmail.com', status: 'active', transaction: '$109.00'},
    {id: 3, userName: 'Angela Moss', avatar: 'adminImages/admin4.png', email: 'moss@gmail.com', status: 'active', transaction: '$110.00'},
    {id: 4, userName: 'Tyrell Wellick', avatar: 'adminImages/tyler.png', email: 'tyler@gmail.com', status: 'active', transaction: '$980.00'},
    {id: 5, userName: 'Edi Alderson', avatar: 'adminImages/EdwardAlderson.png', email: 'edward@gmail.com', status: 'active', transaction: '$23.000'},

]

export {datas, newMembers, transActions, userRows}
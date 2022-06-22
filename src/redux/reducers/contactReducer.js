const initialState = [
    {
        id: 0,
        name: "ward ruman",
        number: 124235346,
        email: "ward@gmail.com"
    },
    {
        id: 1,
        name: "test ruman",
        number: 678735346,
        email: "test@gmail.com"
    },
    {
        id: 2,
        name: "asas ruman",
        number: 6000035346,
        email: "asas@gmail.com"
    },
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map((contact) => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter((contact) => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;
        default:
            return state;
    }
};

export default contactReducer;
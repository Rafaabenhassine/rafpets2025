import {
  ADD_CART,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  AVAILABLE_PRODUCT,
  MIN,
  PLUS,
  EDIT_PRODUCT,
} from "../ActionTypes/ActionsTypes";

//initialState//
const initialState = {
  ListProduct: [
    {
      id: Math.random(),
      name: "Julius k9 Harnais IDC-POWER",
      description:
        "Design innovant- Réfléchissant pour une sécurité dans l'obscurité - Tissu extérieur hydrofuge - Rembourrage intérieur confortable - Taille S - Coleur vert clair ",

      price: "100",

      posterUrl:
        "https://all-for-pets.tn/site/images/CHIENS/Selleries/Harnais/Sans-titre---2-02-Personnalis.png",

      available: false,
      counter: 0,
      cart: false,
    },
    {
      id: Math.random(),
      name: "Julius k9 Harnais IDC-POWER",
      description:
        "Design innovant- Réfléchissant pour une sécurité dans l'obscurité - Tissu extérieur hydrofuge - Rembourrage intérieur confortable - Taille M - Coleur : Vert Militaire , Fushia  , Rouge",

      price: "120",

      posterUrl:
        "https://all-for-pets.tn/site/images/CHIENS/Selleries/Harnais/juli-08.png",

      available: false,
      counter: 0,
      cart: false,
    },
    {
      id: Math.random(),
      name: "Julius k9 Harnais IDC-POWER",
      description:
        "Design innovant- Réfléchissant pour une sécurité dans l'obscurité - Tissu extérieur hydrofuge - Rembourrage intérieur confortable - Taille L - Coleur : Bleue , Rouge  ",

      price: "140",
      posterUrl:
        "https://all-for-pets.tn/site/images/CHIENS/Selleries/Harnais/reste-04-Personnalis.png",

      available: false,
      counter: 0,
      cart: false,
    },
    {
      id: Math.random(),
      name: "Julius k9 Harnais IDC-POWER",
      description:
        "Design innovant- Réfléchissant pour une sécurité dans l'obscurité - Tissu extérieur hydrofuge - Rembourrage intérieur confortable - Taille XL - Coleur : Noir",

      price: "150",
      posterUrl:
        "https://all-for-pets.tn/site/images/CHIENS/Selleries/Harnais/reste-06-1-Personnalis.png",

      available: false,
      counter: 0,
      cart: false,
    },
  ],

  Cart: [],
};

//Pure functions
const ListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, ListProduct: [...state.ListProduct, payload] };
    case EDIT_PRODUCT:
      return {
        ...state,
        ListProduct: state.ListProduct.map((el) =>
          el.id === payload.id
            ? {
                ...el,
                name: payload.name,
                description: payload.description,
                posterUrl: payload.posterUrl,
                price: payload.price,
              }
            : el
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        ListProduct: state.ListProduct.filter((el) => el.id !== payload),
      };
    case AVAILABLE_PRODUCT:
      return {
        ...state,
        ListProduct: state.ListProduct.map((el) =>
          el.id === payload ? { ...el, available: !el.available } : el
        ),
      };
    case PLUS:
      return {
        ...state,
        ListProduct: state.ListProduct.map((el) =>
          el.id === payload
            ? { ...el, counter: el.counter >= 15 ? el.counter : el.counter + 1 }
            : el
        ),
      };
    case MIN:
      return {
        ...state,
        ListProduct: state.ListProduct.map((el) =>
          el.id === payload
            ? { ...el, counter: el.counter <= 0 ? el.counter : el.counter - 1 }
            : el
        ),
      };
    case ADD_CART:
      return {
        ...state,
        ListProduct: state.ListProduct.map((el) =>
          el.id === payload ? { ...el, cart: !el.cart } : el
        ),
      };
    default:
      return state;
  }
};
export default ListReducer;

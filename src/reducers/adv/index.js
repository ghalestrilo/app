import { PICK_ADVENTURE, ADD_ADVENTURE, DELETE_ADVENTURE } from "../../actions/types";

export const initialAdventures = [
  {
    title: "imagem_automática",
    image: require("../../images/adventures/miniatura_imagem_automática.png"),
    nextSession: "",
    progress: 40
  },
  {
    title: "krevast",
    image: require("../../images/adventures/miniatura_krevast.png"),
    nextSession: "",
    progress: 40
  },
  {
    title: "coast",
    image: require("../../images/adventures/miniatura_coast.png"),
    nextSession: "",
    progress: 40
  },
  {
    title: "heartlands",
    image: require("../../images/adventures/miniatura_heartlands.png"),
    nextSession: "",
    progress: 40
  },
  {
    title: "corvali",
    image: require("../../images/adventures/miniatura_corvali.png"),
    nextSession: "",
    progress: 40
  }
];

const adv = (state = initialAdventures, action) => {
  switch (action.type) {
    case ADD_ADVENTURE:
      return {
        ...state,
        list: state.list + action.payload
      }

    case DELETE_ADVENTURE:
      return {
        ...state,
        list: state.list.splice(action.payload, 1)
      }
    
    case PICK_ADVENTURE:
      return {
        ...state,
        chosen: list[action.payload]
      }

    default: return state;
  }
};

export default adv;
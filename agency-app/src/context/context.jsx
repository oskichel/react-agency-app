import { createContext } from "react";
import sofa from '../assets/covers/sofa.png';
import keyboard from '../assets/covers/keyboard.png';
import abstract from '../assets/covers/abstract.png';
import architect from '../assets/covers/architect.png';
import calc from '../assets/covers/calc.png';
import dddone from '../assets/covers/dddone.png';
import handp from '../assets/covers/handp.png';
import sport from '../assets/covers/sport.png';
import workmedia from '../assets/covers/workmedia.png';


export const state = [
    {
    name: "SOFA",
    id: 0,
    src: sofa,
    tag: "design",
    },
    {
    name: "KeyBoard",
    id: 1,
    src: keyboard,
    tag: "branding",
    },
    {
    name: "Work Media",
    id: 2,
    src: workmedia,
    tag: "illustration",
    },
    {
    name: "DDDone",
    id: 3,
    src: dddone,
    tag: "motion",
    },
    {
    name: "Abstract",
    id: 4,
    src: abstract,
    tag: "design",
    },
    {
    name: "HandP",
    id: 5,
    src: handp,
    tag: "branding",
    },
    {
    name: "Architect",
    id: 6,
    src: architect,
    tag: "motion",
    },
    {
    name: "CalC",
    id: 7,
    src: calc,
    tag: "design",
    },
    {
    name: "Sport",
    id: 8,
    src: sport,
    tag: "branding",
    },
    {
    name: "SOFA2",
    id: 9,
    src: sofa,
    tag: "design",
    },
    {
    name: "KeyBoard2",
    id: 10,
    src: keyboard,
    tag: "branding",
    },
    {
    name: "Work Media2",
    id: 11,
    src: workmedia,
    tag: "illustration",
    },
    {
    name: "DDDone2",
    id: 12,
    src: dddone,
    tag: "motion",
    },
    {
    name: "Abstract2",
    id: 13,
    src: abstract,
    tag: "design",
    },
    {
    name: "HandP2",
    id: 14,
    src: handp,
    tag: "branding",
    },
    {
    name: "Architect2",
    id: 15,
    src: architect,
    tag: "motion",
    },
    {
    name: "CalC2",
    id: 16,
    src: calc,
    tag: "design",
    },
    {
    name: "Sport2",
    id: 17,
    src: sport,
    tag: "branding",
    }
 
];

export const StateContext = createContext(state);
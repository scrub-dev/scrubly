import { Fonts, KerningMethods } from "figlet";

export interface TFigletOptions {
    font?: Fonts | undefined,
    horizontalLayout?: KerningMethods | undefined;
    verticalLayout?: KerningMethods | undefined;
}
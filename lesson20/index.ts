// TypeScript - usefull global utility types
// Uppercase, Lowercase, Capitalize, Uncapitalize

type SIZES = "sm" | "md" | "lg";

type U = Uppercase<SIZES>; // "SM" | "MD" | "LG"

type L = Lowercase<SIZES>; // "sm" | "md" | "lg"

type C = Capitalize<SIZES>; //"Sm" | "Md" | "Lg"

type UC = Uncapitalize<U>; // "sM" | "mD" | "lG"

export type Card = {
    id: string;
    type: string;
    name: string;
    color: string;
};



export type Turn = "player1" | "player2" | "ai";
export type Cell = "o" | "x" | "empty";

import { CompetitionResults } from "./CompetitionsResults"

export type Competition = {
    id: string,
    name: string,
    status: STATUS,
    results?: CompetitionResults[],
}

export enum STATUS {
    ongoing = "ongoing",
    finished = "finished"
} 
import { CompetitionResults } from "../model/CompetitionsResults"

export interface IidGenerator {
    generateId(): string 
}

export interface IFindBestResults {
    findBestResults(resultsList: CompetitionResults[]): CompetitionResults[]
}
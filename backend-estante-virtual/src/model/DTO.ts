export interface CompetitionInputDTO {
    name: string
}

export interface CompetitionStatusInputDTO {
    name: string,
    status: string
}

export interface CompetitionResultsInputDTO {
    competition: string,
    athlete: string,
    value: string,
    metric: string
}
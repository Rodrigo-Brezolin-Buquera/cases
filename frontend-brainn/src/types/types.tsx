export interface LotteryProps {
    setLotteryId: Function,
    contestDate: Date | undefined
    contestId: string | undefined
  }

  export interface BoardProps {
    contestResults: string[] | undefined,
  }
  
  export interface Lottery {
    id: number,
    nome: string
  }

  export interface Contest {
    loteriaId: number,
    concursoId: string
  }

  export interface ContestInfo {
    loteria: number,
    id: string,
    data: Date,
    numeros: string[]
  }

  export interface RequestDataProps {
    initialData: unknown,
    url: string
}

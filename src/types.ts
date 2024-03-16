export type Move = {
    name: string,
    times: number
}

export type ProgramDay = {
    moves: Move[]
}

export type ProgramPeriod = {
    current?: boolean,
    periodStart: string,
    periodEnd?: string,
    program: ProgramDay[]
}

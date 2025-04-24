export interface Car {
    id: number;
    brand?: string;
    model?: string;
    year?: number;
    color?: string;
    km?: number;
    plate?: string;
}

export interface Process {
    id: number;
    processName?: string;
    processGroup?: string;
    processType?: string;
    processDescription?: string;
}

export interface UpcomingProcess {
    id: number;
    process?: Process,
    car?: Car,
    date?: Date | any,
    description?: string,
    isDone?: boolean,
    price?: number,
    processKm?: number,
    nextKm?: number,
    currentKm?: number,
}
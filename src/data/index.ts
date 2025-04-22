import { Car, Process, UpcomingProcess } from '../models'
export const carList: Car[] = [
    {
        id: 1,
        brand: 'Opel',
        model: 'Astra',
        year: 2006,
        color: 'Mavi',
        km: 304001,
        plate: '20 AGC 293'
    },
]
export const processList: Process[] = [
    {
        id: 1,
        processName: "Vize",
        processGroup: "Zorunlu Gider",
    },
    {
        id: 2,
        processName: "Sigorta",
        processGroup: "Zorunlu Gider",
    },
    {
        id: 3,
        processName: "Yağ Değişimi",
        processGroup: "Periyodik Bakım",
    }
]
export const upcomingProcessList: UpcomingProcess[] = [
    {
        id: 1,
        process: {
            id: 1,
            processName: "Yağ Değişimi",
            processGroup: "Periyodik Bakım",

        },
        car: {
            id: 1,
            plate: "20 AGC 293",
        },
        date: new Date(),
        description: "Description alanıdır",
        isDone: false,
        price: 5200,
        processKm: 304000,
        nextKm: 314000,
        currentKm: 304200,
    },
    {
        id: 2,
        process: {
            id: 1,
            processName: "Vize",
            processGroup: "Zorunlu Gider",

        },
        car: {
            id: 1,
            plate: "20 AGC 293",
        },
        date: new Date(),
        description: "Description 111 alanıdır",
        isDone: false,
        price: 5200,
        processKm: 304000,
        nextKm: 314000,
        currentKm: 304200,
    }
]
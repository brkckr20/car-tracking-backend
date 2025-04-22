"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upcomingProcessList = exports.processList = exports.carList = void 0;
exports.carList = [
    {
        id: 1,
        brand: 'Opel',
        model: 'Astra',
        year: 2006,
        color: 'Mavi',
        km: 304001,
        plate: '20 AGC 293'
    },
];
exports.processList = [
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
];
exports.upcomingProcessList = [
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
];

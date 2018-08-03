export interface Goal {
    _id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    maxUser: number;
    entryCredit: number;
    participants: any[];
}
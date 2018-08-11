export interface Goal {
    _id: number;
    title: string;
    description: string;
    creator: any;
    startDate: string;
    endDate: string;
    maxUser: number;
    entryCredit: number;
    participants: any[];
}
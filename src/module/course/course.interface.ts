export interface ICourse {
    _id?: string;
    name: string;
    description: string;
    price: number;
    duration: string;
    level: string;
    topics: string[];
    schedule: {
        startDate: string;
        endDate: string;
        classDays: string[];
        classTime: string;
    }
    createdAt?: string;
    updatedAt?: string;
}
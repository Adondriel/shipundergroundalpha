export class Professor {
    _id: string;
    id: number;
    firstName: string;
    lastName: string;
    department: Department;
    email: string;
}

interface Department {
    id: number;
    abbreviation: string;
    name: string;
}

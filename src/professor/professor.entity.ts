import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Professor {
    @ObjectIdColumn()
    _id: ObjectID;
    @Column()
    id: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    @Column()
    department: Department;
}

interface Department {
    id: number;
    abbreviation: string;
    name: string;
}

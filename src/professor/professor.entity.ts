import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Professor {
    @ObjectIdColumn()
    id: ObjectID;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    departmentId: string;
    @Column()
    email: string;
}

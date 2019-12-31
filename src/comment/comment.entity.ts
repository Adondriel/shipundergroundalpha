import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Comment {
    @ObjectIdColumn()
    id?: ObjectID;
    @Column()
    profId: number;
    @Column()
    rating: number;
    @Column()
    postDate: Date;
    @Column()
    course: string;
    @Column()
    subject: string;
    @Column()
    name: string;
    @Column()
    major: string;
    @Column()
    grade: string;
    @Column()
    message: string;
    @Column()
    approved: number;
    @Column()
    effective: number;
    @Column()
    difficulty: number;
    @Column()
    avail: number;
    @Column()
    overall: number;
    @Column()
    usefulVotes: number;
    @Column()
    usefulVotesTotal: number;
}

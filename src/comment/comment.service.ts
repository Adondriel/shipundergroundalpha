import { Injectable } from '@nestjs/common';
import { Comment } from './comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
    ) {}

    async createComment(comment: Comment): Promise<Comment> {
        return await this.commentRepository.save(comment);
    }

    async getComments(): Promise<Comment[]> {
        return await this.commentRepository.find();
    }

    async getComment(id: ObjectID): Promise<Comment> {
        return await this.commentRepository.findOne(id);
    }
}

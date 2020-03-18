import { Injectable } from '@nestjs/common';
import { Comment } from './comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
    ) { }

    async createComment(comment: Comment): Promise<Comment> {
        return await this.commentRepository.save(comment);
    }

    async getComments(profId: number): Promise<any> {
        if (profId) {
            const query = {
                profId,
            };
            console.info(profId);
            console.info(query);
            const result = this.commentRepository.find(query);
            return await result;
        }
        throw Error('no profId');
    }
}

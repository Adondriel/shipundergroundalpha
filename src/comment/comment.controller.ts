import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';
import { ObjectID } from 'typeorm';

@Controller('comment')
export class CommentController {

    constructor(
        private commentService: CommentService,
    ) { }

    @Post()
    async createComment(@Body() comment: Comment) {
        return await this.commentService.createComment(comment);
    }

    @Get(':profId')
    async getComments(@Param('profId') profId: string) {
        let lProfId: number | string;
        if (profId.length < 6) {
            lProfId = Number.parseInt(profId, 10);
        } else if (ObjectID.isValid(profId)) {
            lProfId = profId;
        }
        return await this.commentService.getComments(Number.parseInt(profId, 10));
    }
}

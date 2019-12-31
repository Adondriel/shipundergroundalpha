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

    @Get()
    async getComments() {
        return await this.commentService.getComments();
    }

    @Get(':id')
    async getComment(@Param('id') id: ObjectID) {
        return await this.commentService.getComment(id);
    }

}

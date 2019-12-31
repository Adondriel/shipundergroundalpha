import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProfessorService } from './professor.service';
import { Professor } from './professor.entity';
import { ObjectID } from 'typeorm';

@Controller('professor')
export class ProfessorController {

    constructor(
        private professorService: ProfessorService,
    ) { }

    @Post()
    async createProfessor(@Body() professor: Professor) {
        return await this.professorService.createProfessor(professor);
    }

    @Get()
    async getProfessors() {
        return await this.professorService.getProfessors();
    }

    @Get(':id')
    async getProfessor(@Param('id') id: ObjectID) {
        return await this.professorService.getProfessor(id);
    }

}

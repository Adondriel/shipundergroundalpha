import { Injectable } from '@nestjs/common';
import { Professor } from './professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectID } from 'typeorm';

@Injectable()
export class ProfessorService {

    constructor(
        @InjectRepository(Professor)
        private readonly professorRepository: Repository<Professor>,
    ) {}

    async createProfessor(professor: Professor): Promise<Professor> {
        return await this.professorRepository.save(professor);
    }

    async getProfessors(): Promise<Professor[]> {
        return await this.professorRepository.find();
    }

    async getProfessor(id: ObjectID): Promise<Professor> {
        return await this.professorRepository.findOne(id);
    }
}

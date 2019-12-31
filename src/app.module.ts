import { CommentModule } from './comment/comment.module';
import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessorModule } from './professor/professor.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: 'admin',
      password: 'password',
      database: 'shipunderground',
      entities: ['dist/**/*.entity.js'],
      synchronize: false,
      logging: true,
    }),
    HttpModule,
    ProfessorModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

console.log(process.env.AUTH_DB_HOST, 'process.env');
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `localhost`,
      port: 3306,
      username: `nest-auth`,
      password: `nest-auth`,
      database: `nest-auth`,
      entities: [],
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

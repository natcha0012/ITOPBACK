import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APIService } from './helper/helper';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    UserModule,

  ],
  controllers: [AppController],
  providers: [AppService, APIService],
})
export class AppModule {
  // constructor(private dataSorce: DataSource) {
  // }
}

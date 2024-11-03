import { Module } from '@nestjs/common'
import { AppModule } from 'src/app/app.module'
import { AuthModule } from 'src/auth/auth.module'
import { DemoModule } from 'src/demo/demo.module'

@Module({
  imports: [AppModule, DemoModule, AuthModule],
  controllers: [],
  providers: [],
})
export class GlobalModule {}

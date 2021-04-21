import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:9090',
        package: 'framesystem',
        protoPath: join(__dirname, 'proto/service.proto'),
      },
    },
  );
  await app.listenAsync();
}
bootstrap();

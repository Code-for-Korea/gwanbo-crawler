import 'reflect-metadata';
import Container from 'typedi';
import { AppService } from './services/app.service';

const appService = Container.get(AppService);

appService.bootstrap();

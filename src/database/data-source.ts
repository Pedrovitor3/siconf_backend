import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {  Pessoa } from '../models/pessoa';
import { Frequencia } from '../models/frequencia';


require('dotenv').config();

//import { CreateUsuarios1656685284937 } from '../database/migrations/1656685284937-CreateUsuarios';

export const APPDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [ Pessoa, Frequencia ],
  //  migrations: [CreateUsuarios1656685284937],
  subscribers: [],
});
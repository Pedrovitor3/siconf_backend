import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany,  ManyToOne,  OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'; 
import { Pessoa } from './pessoa';

@Entity("frequencia")
export class Frequencia {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    data: string;

    @OneToMany(()=> Pessoa,(pessoa) => pessoa.frequencia)
    pessoa: Pessoa[];
  
   
    @DeleteDateColumn()
    deleted_at: Date;

    @CreateDateColumn() 
    created_at: Date;

    @UpdateDateColumn() 
    update_at: Date;



    constructor() {
        // Se esse ID não existir, gerar um id
        if (!this.id) {
          this.id = uuid();
        }
      }
}
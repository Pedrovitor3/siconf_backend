import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany,  ManyToOne,  OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'; 
import { Frequencia } from './frequencia';

@Entity("pessoa")
export class Pessoa {
    @PrimaryColumn()
    readonly id: string;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    cpf: string;

    @Column({nullable: true})
    position: number;

    @Column({nullable: true})
    situacao: string;
    
    @Column({nullable: true})
    faltas: string;
    
    @Column({nullable: true})
    observacao: string;

    @Column({nullable: true})
    regional: string;
    
    @Column({nullable: true})
    unidade_policial: string;

    @Column({nullable: true})
    cargo: string;
   
    @ManyToOne(() => Frequencia, (frequencia) => frequencia.pessoa, {nullable: false, eager: true})
    frequencia: Frequencia;  

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
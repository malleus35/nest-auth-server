import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idx!: number;

  @Column()
  id!: string;

  @Column()
  pwd!: string;

  @Column()
  name!: string;
}

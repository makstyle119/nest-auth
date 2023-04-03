import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm';

@Entity()
@Unique('UQ_NAMES', ['username', 'email'])
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: null, nullable: true })
  deleted_by: string;

  @DeleteDateColumn()
  deleted_at: boolean;

  @Column()
  created_by: number;

  @CreateDateColumn()
  created_at: Date;

  @Column({ default: null, nullable: true })
  updated_by: number;

  @UpdateDateColumn()
  updated_at: Date;
}

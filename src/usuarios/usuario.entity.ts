import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Mascota } from '../mascotas/mascota.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  contraseña: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ nullable: true })
  direccion: string;

  @Column({ default: 'usuario' })
  rol: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @OneToMany(() => Mascota, (mascota) => mascota.usuario)
  mascotas: Mascota[];
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('mascotas')
export class Mascota {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column({ nullable: true })
  raza: string;

  @Column({ nullable: true })
  edad: number;

  @Column({ nullable: true })
  genero: string;

  @Column({ nullable: true, type: 'text' })
  descripcion: string;

  @Column({ nullable: true })
  imagen_url: string;

  @Column({ default: true })
  disponible: boolean;

  @ManyToOne(() => Usuario, (usuario) => usuario.mascotas)
  usuario: Usuario;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_publicacion: Date;
}

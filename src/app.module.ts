import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { Usuario } from './usuarios/usuario.entity';
import { Mascota } from './mascotas/mascota.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  // Cambia si es necesario
      port: 5432,
      username: 'postgres', // Cambia por tu usuario de PostgreSQL
      password: 'postgres', // Cambia por tu contraseña de PostgreSQL
      database: 'unipatitas', // Cambia por tu nombre de base de datos
      entities: [Usuario, Mascota],
      synchronize: true, // Sincroniza automáticamente las tablas (solo en desarrollo)
    }),
    TypeOrmModule.forFeature([Usuario, Mascota]),
    UsuariosModule,
    MascotasModule,
  ],
})
export class AppModule {}

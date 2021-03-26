import { ParentEntity } from "src/shared/parent-entity.base"
import { Column, DeleteDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { RolesEntity } from "./role.entity"

@Entity('users')
export class UserEntity extends ParentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 64, nullable: true })
  name: string

  @Column({ type: 'varchar', length: 64, nullable: true })
  family: string

  @Column({ type: 'varchar', length: 20, unique: true, nullable: true })
  phone: string

  @Column({ type: 'varchar', length: 20 })
  avatar: string

  @Column({
    type: 'varchar',
    select: false,
    length: 128,
  })
  password: string

  @Column({ type: 'varchar', length: 64, nullable: true, unique: true })
  email?: string

  @Column({ default: false })
  status: boolean

  @Column({ nullable: true })
  gender: boolean

  @Column('date', { nullable: true })
  birth_day: Date

  @ManyToMany(
    () => RolesEntity,
    roles => roles.users,
  )
  @JoinTable({
    name: 'user_roles',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles: RolesEntity[]

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date
}
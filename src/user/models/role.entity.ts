import {
Column,
DeleteDateColumn,
Entity,
ManyToMany,
PrimaryGeneratedColumn,
} from 'typeorm'

import { ParentEntity } from '../../shared/parent-entity.base'
import { UserEntity } from './user.entity'

@Entity('roles')
export class RolesEntity extends ParentEntity {
    @PrimaryGeneratedColumn('increment', { type: 'bigint' })
    id: number

    @Column({ type: 'varchar', length: 64, nullable: false, unique: true })
    name: string

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string

    @Column({ type: 'bool', default: true })
    active: boolean

    @Column({ type: 'bool', default: false })
    static: boolean

    @ManyToMany(
    () => UserEntity,
    user => user.roles,
    )
    users: UserEntity[]

    @DeleteDateColumn({ type: 'timestamp' })
    deleted_at?: Date
}

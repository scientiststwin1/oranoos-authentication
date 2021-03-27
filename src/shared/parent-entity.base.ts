import { CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm'

export class ParentEntity extends BaseEntity {
  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date
}

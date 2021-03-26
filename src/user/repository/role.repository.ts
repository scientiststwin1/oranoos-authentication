import {
    EntityRepository,
    Repository,
} from 'typeorm'

import { RolesEntity } from '../models/role.entity'

@EntityRepository(RolesEntity)
export class RoleRepository extends Repository<RolesEntity> {}

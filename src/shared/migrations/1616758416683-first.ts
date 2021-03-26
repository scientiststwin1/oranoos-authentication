import {MigrationInterface, QueryRunner} from "typeorm";

export class first1616758416683 implements MigrationInterface {
    name = 'first1616758416683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `id` varchar(36) NOT NULL, `name` varchar(64) NULL, `family` varchar(64) NULL, `phone` varchar(20) NULL, `avatar` varchar(20) NULL, `password` varchar(128) NOT NULL, `email` varchar(64) NULL, `status` tinyint NOT NULL DEFAULT 0, `gender` tinyint NULL, `birth_day` date NULL, `role` int NOT NULL, `deleted_at` timestamp(6) NULL, UNIQUE INDEX `IDX_a000cca60bcf04454e72769949` (`phone`), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_a000cca60bcf04454e72769949` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class first1616744935549 implements MigrationInterface {
    name = 'first1616744935549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `roles` (`created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `id` bigint NOT NULL AUTO_INCREMENT, `name` varchar(64) NOT NULL, `description` varchar(255) NULL, `active` tinyint NOT NULL DEFAULT 1, `static` tinyint NOT NULL DEFAULT 0, `deleted_at` timestamp(6) NULL, UNIQUE INDEX `IDX_648e3f5447f725579d7d4ffdfb` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_roles` (`user_id` varchar(36) NOT NULL, `role_id` bigint NOT NULL, INDEX `IDX_87b8888186ca9769c960e92687` (`user_id`), INDEX `IDX_b23c65e50a758245a33ee35fda` (`role_id`), PRIMARY KEY (`user_id`, `role_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user_roles` ADD CONSTRAINT `FK_87b8888186ca9769c960e926870` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user_roles` ADD CONSTRAINT `FK_b23c65e50a758245a33ee35fda1` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_roles` DROP FOREIGN KEY `FK_b23c65e50a758245a33ee35fda1`");
        await queryRunner.query("ALTER TABLE `user_roles` DROP FOREIGN KEY `FK_87b8888186ca9769c960e926870`");
        await queryRunner.query("DROP INDEX `IDX_b23c65e50a758245a33ee35fda` ON `user_roles`");
        await queryRunner.query("DROP INDEX `IDX_87b8888186ca9769c960e92687` ON `user_roles`");
        await queryRunner.query("DROP TABLE `user_roles`");
        await queryRunner.query("DROP INDEX `IDX_648e3f5447f725579d7d4ffdfb` ON `roles`");
        await queryRunner.query("DROP TABLE `roles`");
    }

}

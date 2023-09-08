-- CreateTable
CREATE TABLE `table_functions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `table_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `password_hash` TEXT NOT NULL,
    `id_function` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL,

    INDEX `id_function`(`id_function`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `table_user` ADD CONSTRAINT `table_user_ibfk_1` FOREIGN KEY (`id_function`) REFERENCES `table_functions`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

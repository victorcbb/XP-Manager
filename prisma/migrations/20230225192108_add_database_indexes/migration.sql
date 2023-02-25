-- DropForeignKey
ALTER TABLE `accounts` DROP FOREIGN KEY `accounts_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `campaigns` DROP FOREIGN KEY `campaigns_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `characters` DROP FOREIGN KEY `characters_campaign_id_fkey`;

-- DropForeignKey
ALTER TABLE `experiences` DROP FOREIGN KEY `experiences_character_id_fkey`;

-- DropForeignKey
ALTER TABLE `sessions` DROP FOREIGN KEY `sessions_user_id_fkey`;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `accounts_user_id_fkey` TO `accounts_user_id_idx`;

-- RenameIndex
ALTER TABLE `campaigns` RENAME INDEX `campaigns_user_id_fkey` TO `campaigns_user_id_idx`;

-- RenameIndex
ALTER TABLE `characters` RENAME INDEX `characters_campaign_id_fkey` TO `characters_campaign_id_idx`;

-- RenameIndex
ALTER TABLE `experiences` RENAME INDEX `experiences_character_id_fkey` TO `experiences_character_id_idx`;

-- RenameIndex
ALTER TABLE `sessions` RENAME INDEX `sessions_user_id_fkey` TO `sessions_user_id_idx`;

-- 示例种子数据（开发环境）
USE `ai_sdlc`;

INSERT INTO `users` (`username`, `email`, `password_hash`)
VALUES ('admin', 'admin@example.com', 'CHANGE_ME')
ON DUPLICATE KEY UPDATE `username` = `username`;

# database

MySQL 数据库脚本目录。

## 使用

```bash
mysql -u root -p < schema.sql   # 建库建表
mysql -u root -p < seed.sql     # 种子数据（可选）
```

约定：

- `schema.sql` — 全量建库建表脚本，表结构变更时同步更新
- `seed.sql` — 开发用种子数据
- `migrations/` — 如后续使用 Alembic，增量迁移由 backend/alembic 管理，此目录存放生产环境的幂等基线脚本

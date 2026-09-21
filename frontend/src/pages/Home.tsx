import { useQuery } from '@tanstack/react-query'
import { Card, Typography } from 'antd'
import { getHealth } from '@/api/health'

export default function Home() {
  const { data } = useQuery({ queryKey: ['health'], queryFn: getHealth })

  return (
    <div style={{ maxWidth: 720, margin: '80px auto', padding: '0 16px' }}>
      <Typography.Title level={2}>AI SDLC</Typography.Title>
      <Card title="后端健康检查" style={{ marginTop: 24 }}>
        {data ? (
          <Typography.Text>
            状态：{data.status}，版本：{data.version}
          </Typography.Text>
        ) : (
          <Typography.Text type="secondary">后端未连接（请先启动 backend 服务）</Typography.Text>
        )}
      </Card>
    </div>
  )
}

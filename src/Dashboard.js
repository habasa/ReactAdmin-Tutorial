import * as React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core'

export default () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>관리자 전용 페이지입니다.</CardContent>
    </Card>
)
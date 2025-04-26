import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, CheckCircle, Hourglass, MessageSquare } from 'lucide-react'

function Dashboard({posted, posted_value, completed, completed_value, proposals, proposals_value, reviews, reviews_value}) {
  return (
    <div className="p-10 bg-[#F0EFEC]  h-[100vh]">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{posted}</p>
              <h2 className="text-3xl font-bold">{posted_value}</h2>
            </div>
            <FileText className="h-6 w-6 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{completed}</p>
              <h2 className="text-3xl font-bold">{completed_value}</h2>
            </div>
            <CheckCircle className="h-6 w-6 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Proposals</p>
              <h2 className="text-3xl font-bold">0</h2>
            </div>
            <Hourglass className="h-6 w-6 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Reviews</p>
              <h2 className="text-3xl font-bold">{reviews_value}</h2>
            </div>
            <MessageSquare className="h-6 w-6 text-muted-foreground" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Page Views</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center text-muted-foreground">
            No data available
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center text-muted-foreground">
            No notifications
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{proposals}</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          No proposals found.
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard;
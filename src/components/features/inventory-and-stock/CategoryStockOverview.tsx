import {useState} from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  PieChart,
  BellowLabels,
  LineChart,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components"
import { CategoryStockOverviewContainer } from "./styles"
import { pieChartData, lineChartData } from "./mockedData"

const CategoryStockOverview = () => {
  const [lineChartActiveData, setLineChartActiveData] = useState(lineChartData[0])

  const handleLineChartTabChange = (id: number) => {
    setLineChartActiveData(lineChartData[id])
  }

  return (
    <CategoryStockOverviewContainer>
      <Card>
        <CardHeader>
          <CardTitle>
            Inventory categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart data={pieChartData} />
          <BellowLabels data={pieChartData} />
        </CardContent>
      </Card>
      <Card className="w-[100%]">
        <CardHeader>
          <CardTitle>
            Stock overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={lineChartActiveData?.id}>
            <TabsList>
              {lineChartData?.map((data, index) => (
                <TabsTrigger
                  key={index}
                  value={data?.id}
                  onClick={() => handleLineChartTabChange(index)}
                >
                  {data.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={lineChartActiveData?.id} forceMount className="w-full">
              <LineChart data={lineChartActiveData?.history} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </CategoryStockOverviewContainer>
  )
}

export default CategoryStockOverview
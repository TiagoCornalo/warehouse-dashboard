import { VisSingleContainer, VisDonut, VisTooltip } from '@unovis/react';
import { Donut } from '@unovis/ts'

interface PieChartProps {
  data: {
    label: string;
    value: number;
  }[];
}

const PieChart = ({
  data
}: PieChartProps) => {

  const valueAccessor = (d: { label: string; value: number }) => d.value;

  const triggers = {
    [Donut.selectors.segment]: ({ data }: any) => `
      <div style="text-align: center;">
        <span style="font-weight: bold;">${data.label}</span>
        <br />
        <span style="font-size: 0.8rem;">${data.value}</span>
      </div>`
  };

  return (
    <VisSingleContainer>
      <VisTooltip triggers={triggers} />
      <VisDonut arcWidth={0} value={valueAccessor} data={data} />
    </VisSingleContainer>
  );
}

export default PieChart;

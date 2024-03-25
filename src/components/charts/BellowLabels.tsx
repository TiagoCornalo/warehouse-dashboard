import { VisBulletLegend } from '@unovis/react'
import { LabelsContainer } from './styles';

interface BellowLabelsProps {
  data: {
    label: string;
    value: number;
  }[];
}

const BellowLabels = ({ data }: BellowLabelsProps) => {
  const items = data.map(({ label }) => ({ name: label }))

  return (
    <LabelsContainer>
    <VisBulletLegend items={items} bulletSize={'10px'} labelFontSize={'1rem'} />
    </LabelsContainer>
  )
}

export default BellowLabels
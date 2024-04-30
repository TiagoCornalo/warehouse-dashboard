// En la carpeta /src/components/Dashboard.tsx
import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { LayoutMain } from '@/components';

interface DashboardProps {
  config: {
    path: string;
    embedUrl: string;
    accessToken: string;
    reportId: string;
  };
}

const DashboardPowerBi: React.FC<DashboardProps> = ({ config }) => {
  const embedConfig = {
    type: 'report',
    tokenType: models.TokenType.Aad,
    accessToken: config.accessToken,
    embedUrl: config.embedUrl,
    id: config.reportId,
  };

  return (
    <LayoutMain>
      <PowerBIEmbed
        embedConfig={embedConfig}
        eventHandlers={
          new Map([
            [
              'loaded',
              function () {
                console.log('Report loaded');
              },
            ],
            [
              'rendered',
              function () {
                console.log('Report rendered');
              },
            ],
          ])
        }
        cssClassName={'bi-embedded'}
      />
    </LayoutMain>
  );
};

export default DashboardPowerBi;

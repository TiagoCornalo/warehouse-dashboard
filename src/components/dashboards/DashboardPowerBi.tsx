import React, { useState, useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { LayoutMain } from '@/components';
import useIsMobile from '@/hooks/useIsMobile';

interface DashboardProps {
  config: {
    path: string;
    type: string;
    embedUrl: string;
    embedToken: string;
    reportId: string;
  };
}

const DashboardPowerBi: React.FC<DashboardProps> = ({ config }) => {
  const { isMobile } = useIsMobile();
  const [isConfigLoaded, setIsConfigLoaded] = useState(false);

  useEffect(() => {
    setIsConfigLoaded(true);
  }, [isMobile]);

  if (!isConfigLoaded) {
    return <div>Loading...</div>;
  }

  const mobileSettings = {
    layoutType: isMobile ? models.LayoutType.MobilePortrait : models.LayoutType.Master,
    filterPaneEnabled: false,
    navContentPaneEnabled: false,
  };

  const embedConfig = {
    type: config.type,
    tokenType: models.TokenType.Embed,
    accessToken: config.embedToken,
    embedUrl: config.embedUrl,
    id: config.reportId,
    pageView: isMobile ? 'oneColumn' : 'fitToWidth',
    settings: mobileSettings,
    height: '100vh',
  };

  return (
    <LayoutMain>
      <PowerBIEmbed
        key={config.reportId}
        embedConfig={embedConfig}
        cssClassName={'bi-embedded'}
      />
    </LayoutMain>
  );
};

export default DashboardPowerBi;

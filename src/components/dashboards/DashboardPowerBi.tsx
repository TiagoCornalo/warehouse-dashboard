import React, { useState, useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { LayoutMain } from '@/components';
import useIsMobile from '@/hooks/useIsMobile';
import { useUser } from '@clerk/clerk-react';
import {canAccessDashboards} from '@/utils';

interface DashboardProps {
  config: {
    path: string;
    type: string;
    embedUrl: string;
    embedToken: string;
    reportId: string;
    permissions: any
    iframe?: boolean;
  };
}

const DashboardPowerBi: React.FC<DashboardProps> = ({ config }) => {
  const { user } = useUser();
  const { isMobile } = useIsMobile();
  const userPermissions = user?.publicMetadata?.additional_permissions;
  const dashboardPermissions = config.permissions;

  const [isConfigLoaded, setIsConfigLoaded] = useState(false);

  useEffect(() => {
    const hasAccess = canAccessDashboards(dashboardPermissions, userPermissions);
    if (!hasAccess) {
      window.location.href = '/';
    }
  }, [config, userPermissions, dashboardPermissions]);

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
      {
        config.iframe ? (
          <iframe role="presentation" src={config.embedUrl} frameBorder='0' allowFullScreen className='bi-embedded'></iframe>
        ) :
        <PowerBIEmbed
        key={config.reportId}
        embedConfig={embedConfig}
        cssClassName={'bi-embedded'}
      />
      }
    </LayoutMain>
  );
};

export default DashboardPowerBi;

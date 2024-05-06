import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface ClientInfo {
  name: string;
  logo: string;
  address: string;
  phone: string;
  email: string;
}

const ClientContext = createContext<{
  client: ClientInfo | null;
  setClient: React.Dispatch<React.SetStateAction<ClientInfo | null>>;
}>({
  client: null,
  setClient: () => {},
});

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [client, setClient] = useState<ClientInfo | null>(null);

  useEffect(() => {
    const loadClientInfo = async () => {
      const response = await axios.get('/client.json');
      setClient(response.data.client);
    };

    loadClientInfo();
  }, []);

  return <ClientContext.Provider value={{ client, setClient }}>{children}</ClientContext.Provider>;
};

export const useClient = () => useContext(ClientContext);

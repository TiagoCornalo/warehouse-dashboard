import { LayoutMain } from "@/components"
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from 'powerbi-client';

const InventoryAndStock = () => {
  const embedConfig = {
    type: 'report',
    tokenType: models.TokenType.Aad,
    accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSIsImtpZCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTM2ZThhOGItNzc1Yi00M2EwLWFkZmQtMzM3YmFjMjU0NDIwLyIsImlhdCI6MTcxMjg0NTI1MCwibmJmIjoxNzEyODQ1MjUwLCJleHAiOjE3MTI4NDkyNjQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84V0FBQUE5QTAzcEtMcVphVEtyODB6ek56aWNTdmRIbmhFZjhTREpmRnZ2UEpmYURQT1J6N0lQK0diR1NCbk90QmRZbTJVeWZPYWdCTXoyUE1xOURoeW5CaTdEVFRnRVJDVkZDa2JGSDhDYzlMekdrcz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJDb3JuYWxvIiwiZ2l2ZW5fbmFtZSI6IlRpYWdvIiwiaXBhZGRyIjoiMTg2LjEwOC4xODYuMjIiLCJuYW1lIjoiVGlhZ28gIENvcm5hbG8iLCJvaWQiOiJiNjEyNGUwOS0yOGRkLTQxOGUtYTk3MS0yZmMwMTVmNjA1MjIiLCJwdWlkIjoiMTAwMzIwMDM2QzhEMUZBMiIsInJoIjoiMC5BU1VBaTRwdWsxdDNvRU90X1RON3JDVkVJQWtBQUFBQUFBQUF3QUFBQUFBQUFBQWxBTjguIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiZFdEVXg0UTh3dkx0TmJiQVplQ0l0ZVowb0FPRFJuYzJ4VlZUblE0MjBsdyIsInRpZCI6IjkzNmU4YThiLTc3NWItNDNhMC1hZGZkLTMzN2JhYzI1NDQyMCIsInVuaXF1ZV9uYW1lIjoidGlhZ28uY29ybmFsb0BibGluay1zcmwuY29tIiwidXBuIjoidGlhZ28uY29ybmFsb0BibGluay1zcmwuY29tIiwidXRpIjoiTXdnTE9BLTk1MGlJUkpvMlNYa1BBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.4F7NaPsX5GKSWoKupLt6oVWb55uaw_7fTf91oE1wF5FgEBLEwuoyuYuAOrrroXakxpXj4XTagTRbHF05u6vJOBJ5QYbGFtSRSJwbWbH3r4-lplcjQgbBbpsRdXcXADmcUI2zaUyWUIJYWcdfDm8ExqXCMA-YNyRfEMkNai4xB9vpz9sMWGLI8X72p3HQNSsc8qfmVyoFiVAVMN__-AFtSEcy3eQ5d18zYjSGrNfHZtwken4KgaCeH7JqYGj67bQE5n9c4_VcQdGM7AdX9hPQZsfTClSs0gux_wESLGNhcLWGmRQbQYWC3gkzIODFRFUy0BU4YlGnAoNC7OZfDp28fQ",
    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=425b1d9c-e98d-4c0e-9a09-2873ddbb8738&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVBBQVMtMS1TQ1VTLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
    id: "425b1d9c-e98d-4c0e-9a09-2873ddbb8738",
};

  return (
    <LayoutMain>
      {/* <CategoryStockOverview />
      <TableStock /> */}
     <PowerBIEmbed
            embedConfig={embedConfig}
            eventHandlers={
                new Map([
                    ['loaded', function () { console.log('Report loaded'); }],
                    ['rendered', function () { console.log('Report rendered'); }],
                ])
            }
            cssClassName = { "bi-embedded" }
        />
    </LayoutMain>
  )
}

export default InventoryAndStock
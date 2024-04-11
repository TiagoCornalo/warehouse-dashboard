import { LayoutMain } from "@/components"
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from 'powerbi-client';

const InventoryAndStock = () => {
  const embedConfig = {
    type: 'report',
    tokenType: models.TokenType.Aad,
    accessToken: "H4sIAAAAAAAEAB2Ut66EVgBE_-W1WCInSy7IaZcMC3SXJeecLP-7n91PdWbO_P1jg7sbQfbz589YcoGnMab6jqJ8Mh243igjUVz8APkoldLFabAAT_CrSd5Q1VYF0LaWlOXrHVfIV50G7ix1yS9ym0M3QDb65tDpdt1UE3OCRwWegs1O6AcEGgdN3CXdtYeWgkpdAgI4nyww1pFBRHReeLY5No8tn-mwhDAeWA480gI9pBE1gAvtV1WTxbymzz33bwI5gtdysJHOqPSxTkjY3SZBNl7vZ7JBj0ROB-lh7Ema6r1C3yo3uvGMelu7LWOLiQeS85HoQsqmq2qGdAr06ZrYoTDteUekSIh3GuVe8zD6ufikYLLoWnOcc01I8IQhSf-yohCdI2Hw6udIiqdJcNzvTukn5yvpqofp-w1ZhOwuUWvPfPKdrFHmCUGlvWaZObNyoGsn-Y6dT_0w2rLXy3WHGDjCNI_OUvGcVZNCi-x-DeuCM7tbKC9pu9tHps_B7lKucr8cB7MR0cCgqiwGMPHNyLPILR2CdOwih3KzTWm6pjowMhQQ0tANVI1W0PG5r86p-5U_1PazTzPfHkYvksjLlBvYh6LCKEmuIVn65mY2utX6SMVVKbmwWfS1n0hZmyrbl7iO4Th9uATQ-SCt4AuWU-Z1HG0TRrsfdI1FsEqxcApz1buZy-8vJZlTe6B4V-G6c7l9hzXoc2VltqdmTh-y0517ZBQXQ18DpqEDLL4xJ-HhMe-8Z8pZdkdIlug4bI5shnG3aH1CjFjpbxjLotqqmWuKWNJ0Td3vXTU_CQLbWGA96rd8vXzWxLzJ9-L5NVWOXojT1B8IDdeWhoIORgkcgRBTtUQzI4RrFXwbJ4rdVR777dOGC_uaDu4ei92DH4f7Daky2ow4_fPHj7Dc0zYa-f2rkw6bGC-EFjgOxevu_rVDBU7xFBQ6r3hCn02_5ioDrXTa0yd9yTj6MliZqz3csJOwyj-iZbAO79yvDUexAljpI7flmWudFsAYeQWCtjGwJeUwNbsyzz7ecwJv7E0qX6xZ7zXZAmyRgWs9HMhK7E_ZBqjSFuy7Be-lQSPBrRpI1uPAEWeEeZbO3OJkcMYRpwzHyzjHuYVQnD_rAEiZvasq_aCKEmelq7wHh6ZrxzCAY9yep0fMYxYdodSeQKTMvJqSX4ELuEH9NGJ4HJ-sJK3t264lv0QzNs0zlSyQqwxf03D25xIqEU5vBj8g-nFhLv5ahm6jbNKl-icRQ0U8834eoMc5__rrP8z3VOWLFv5Sdlh0-6DNg-LUaD2kFeuaZ5b_p7y6HMC2L_lvTHkkP6LI9sX2B9G6i1mT9QkzPoJ8rhE3Zt1eUEgvrMoMoXeu0KOyx_cWt1kani0kOz0NaZvfbn0j2OswQW46jFeVEN53zDwOjoxEj71I5sb1LKFKIi4xdcnZG5mPT5L2y71ypVSH-7OO0jcLLvn3JsjzgY_DO4li7udVJb62M2VS0Ne0AEa7J0meoZzhyyx3OYR0iOJ2rfGl-ms6RJOaflT-GxhzC7D1MI9xYMKp_qr-7uL3wcf0r_fkFM694m4gsIjf3gy92GJKE3gps7TH1Fs237K2s-XtzHMRRO2GtQW9XxSOZdAwj5ZDseLv2hetkfHmGoldOBV7GVrJdEnSQeP3f2X88y-bekhPQgYAAA==eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVBBQVMtMS1TQ1VTLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzEyODA3MjkxLCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=c97a982e-e2df-4cc0-a3e9-70dfe84650c4&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVBBQVMtMS1TQ1VTLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
    id: "c97a982e-e2df-4cc0-a3e9-70dfe84650c4",
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
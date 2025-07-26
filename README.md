# API de Mapeamento Territorial de Moçambique

API que fornece dados geográficos e administrativos de Moçambique em formato JSON.

## 📋 Rotas Disponíveis

### 🌍 Dados Globais
- `GET /getAllCountryDetail` - Todos os países com detalhes
- `GET /getCountryCapitalNameOnly/:country` - Capital de um país
- `GET /getAllCountryContinentNameOnly` - Lista de continentes
- `GET /getAllCountryNameOnly` - Nomes de todos os países
- `GET /getAllCountryNameOnlyByContinent/:continent` - Países por continente

### 🇲🇿 Dados de Moçambique
- `GET /getAllProvinceDetail` - Todas as províncias
- `GET /getAllProvinceNameOnly` - Nomes das províncias
- `GET /getAllProvinceRegionNameOnly` - Regiões (Norte, Centro, Sul)
- `GET /getAllProvinceNameOnlyByRegion/:region` - Províncias por região
- `GET /getLocationByProvinceNameOnly/:province` - Localização de uma província
- `GET /getAllDistrictNameOnlyByProvince/:province` - Distritos por província
- `GET /getAllAdministractiveNameOnlyByDistrict/:district` - Postos administrativos

## 🚀 Como Usar

1. Instale as dependências:
```bash
yarn install

2. Inicie o servidor rodando
```bash
yarn dev

3. Utilizar a partir de uma url da propria hospedagem:
https://mozambique-geo-api.onrender.com

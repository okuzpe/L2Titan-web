# L2Titan - Lineage 2 Interlude Server Website

Este es el sitio web oficial para el servidor L2Titan, construido con Astro y Tailwind CSS.

## Requisitos Previos

- Node.js (v18 o superior)
- npm (incluido con Node.js)

## Instalación

1.  Abre una terminal en la carpeta del proyecto.
2.  Instala las dependencias:

```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo y ver los cambios en tiempo real:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

## Producción

Para construir la versión final del sitio (optimizada):

```bash
npm run build
```

Los archivos generados estarán en la carpeta `dist/`.

## Analítica por País/Región/Ciudad (VPS + Nginx)

El script `deploy.sh` ahora configura en el VPS:

- Log dedicado de Nginx (raw): `/var/log/nginx/l2titan_access_country.log`
- Script de agregación diaria: `/usr/local/bin/l2titan-aggregate-country-visits.sh`
- Script de consulta rápida: `/usr/local/bin/l2titan-query-country-city.sh`
- CSV de métricas acumuladas (sin IP): `/var/log/l2titan/visits_by_country.csv`
- Cron diario (00:05 UTC): `/etc/cron.d/l2titan-country-visits`
- Rotación de logs: `/etc/logrotate.d/l2titan-country-analytics`

### Formato del log raw geo

Cada línea en `/var/log/nginx/l2titan_access_country.log` queda así:

`<timestamp_iso>|<country_iso2>|<region>|<city>|<ip>|<method>|<host>|<uri>|<status>`

Ejemplo:

`2026-03-15T20:15:10+00:00|AR|Cordoba|Cordoba|181.30.10.20|GET|l2titan.com|/downloads|200`

### Formato del CSV agregado (canónico)

Cada línea en `/var/log/l2titan/visits_by_country.csv`:

`<date_utc>,<country_iso2>,<region>,<city>,<hits_get>,<unique_ips>`

Ejemplo:

`2026-03-15,AR,Cordoba,Cordoba,245,179`

### Consultas rápidas

Top países/regiones/ciudades del día (orden por `hits`):

```bash
sudo /usr/local/bin/l2titan-query-country-city.sh /var/log/nginx/l2titan_access_country.log /var/log/l2titan/visits_by_country.csv today 20 hits
```

Top países/regiones/ciudades de los últimos 7 días (orden por `unique_ips`):

```bash
sudo /usr/local/bin/l2titan-query-country-city.sh /var/log/nginx/l2titan_access_country.log /var/log/l2titan/visits_by_country.csv 7d 20 unique_ips
```

Consulta unificada (países y ciudades) desde tu PC:

```bash
ssh -i "/C/Users/Omar/.ssh/id_ed25519" omar@128.254.207.166 "sudo /usr/local/bin/l2titan-query-country-city.sh /var/log/nginx/l2titan_access_country.log /var/log/l2titan/visits_by_country.csv today 20 hits"
```

Modos disponibles: `today`, `7d`, `all`.  
Criterios de orden: `hits`, `unique_ips`.

### Verificación después de deploy

En el VPS:

```bash
sudo nginx -t
sudo systemctl status nginx --no-pager
sudo tail -n 20 /var/log/nginx/l2titan_access_country.log
sudo tail -n 20 /var/log/l2titan/visits_by_country.csv
sudo /usr/local/bin/l2titan-query-country-city.sh /var/log/nginx/l2titan_access_country.log /var/log/l2titan/visits_by_country.csv today 10 hits
sudo /usr/local/bin/l2titan-query-country-city.sh /var/log/nginx/l2titan_access_country.log /var/log/l2titan/visits_by_country.csv 7d 10 unique_ips
```

## Estructura del Proyecto

- `src/pages`: Páginas del sitio (Home, Descargas, About).
- `src/components`: Componentes reutilizables (Navbar, Footer, Stats, News).
- `src/layouts`: Plantilla principal.
- `public/images`: Imágenes estáticas (Fondo, Noticias).

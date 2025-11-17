# React Portfolio + WordPress (FTP friendly)

- Vite + React + TypeScript
- HashRouter (funciona bem em hospedagem tradicional via FTP)
- Consumo da API do WordPress (WP v2 e ACF v3)
- Responsivo e performático (imagens `loading="lazy"`, layout em CSS Grid, build estático)

## Como usar

1. Renomeie `.env.example` para `.env` e ajuste as URLs de API do seu WordPress.
2. Instale as dependências:

```bash
npm i
```

3. Ambiente de desenvolvimento:

```bash
npm run dev
```

4. Build para produção (gera arquivos estáticos em `dist/`):

```bash
npm run build
```

5. Faça upload de **todo o conteúdo de `dist/`** para a sua hospedagem via FTP.

> Dica: Utilize `HashRouter` (já configurado). Assim, `seusite.com/#/certificados` funciona sem precisar configurar regras de servidor.

## Onde ajustar

- **Sidebar**: `src/components/Sidebar.tsx`
- **Listagem de projetos**: `src/pages/Home.tsx` + `src/components/ProjectCard.tsx`
- **Cliente WP**: `src/api/wp.ts`
- **Estilos**: `src/styles.css`

## API do WP

O projeto tenta buscar imagens em campos ACF (`acf.thumb`/`acf.image`), `better_featured_image` ou `_embedded` de `featuredmedia`. Sinta-se à vontade para adaptar o mapeamento em `getPostImage` conforme o seu schema.


```mermaid
flowchart TD
    A[Início da Aplicação<br/>main.tsx] --> B[Renderiza App.tsx]

    B --> C[Carrega Sidebar]
    B --> D[Carrega Página Atual via React Router]

    D --> E[Home.tsx<br/>Lista projetos]
    E --> F[ProjectCard.tsx]

    F -->|Clique no Card| G[Navega para ProjectDetails.tsx]

    G --> H[Busca dados do projeto na API WordPress<br/>src/api/wp.ts]
    H --> I[Renderiza detalhes do projeto]

    D --> J[Certificates.tsx]
    J --> K[Carrega certificados do diretório public/certificates]

    D --> L[Contact.tsx]

    C --> M[Links de navegação<br/>Home / Certificados / Contato]

    B --> N[Spinner.tsx<br/>Carregado enquanto API responde]

```


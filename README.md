# XPMANAGER

Essa aplicação web fullstack foi desenvolvida para que mestres de RPG de mesa, tanto do Pathfinder quanto D&D 5E, possam gerenciar de forma prática as experiências e níveis de cada personagem em suas campanhas narradas. É possivel também gerar uma tabela com nome dos personagens, sua experiência total, ultima experiência e nível, que pode ser baixada como imagem para que o mestre possa compartilhar em seus grupos.

Caso tenha interesse, pode visualizar a aplicação rodando em: https://xpmanager.vercel.app/

## Stack Tecnológica:

 - `Next`
 - `Typescript`
 - `Axios`
 - `Styled-components`
 - `React-icons`
 - `Radix-ui`
 - `React-toastify`
 - `React-hook-form`
 - `Zod`
 - `Nookies`
 - `Next-auth`
 - `Next-seo`
 - `googleapi`
 - `Prisma`
 - `Dayjs`
 - `Downloadjs`
 - `Html2canvas`

## Começando

Primeiro, baixe em um diretório ou clone esse repositório utilizando:

```bash
git clone git@github.com:victorcbb/XP-Manager.git
```

instale as dependências com:

```bash
npm i
```

### Instalando o Docker

Agora será necessário instalar o Docker para que possa ser criado um banco de dados Mysql. As estratégias de instalação variam de acordo com o sistema operacional da sua maquina. Caso seja necessário, siga o passo a passo direto da documentação do Docker:

- [Windows](https://docs.docker.com/desktop/install/windows-install/)
- [MacOS](https://docs.docker.com/desktop/install/mac-install/)
- [Linux](https://docs.docker.com/desktop/install/linux-install/#supported-platforms)

Com o Docker instalado, vamos criar um container com o banco de dados Mysql através da CLI:

 ```bash 
docker run --name mysql -e MYSQL_ROOT_PASSWORD=docker -p 3306:3306 mysql:latest
```

Você pode utilizar a interface gráfica do Docker para iniciar e parar o container do banco de dados ou usar as respectivas CLI:

 ```bash 
docker start mysql
```

 ```bash 
docker stop mysql
```

Com as mesmas credênciais utilizadas para criar o banco de dados no passo anterior, acesse o arquivo `.env.example` e modifique o `DATABASE_URL`. Aproveite para renomar o arquivo para `.env`.

Para criar as tabelas no banco de dados use o comando:

 ```bash 
npx prisma migrate dev
```

Por fim, rode o servidor de desenvolvimento com:

```bash
npm run dev
```

## Endpoints

### users

`POST`: 
```bash 
/users/
```

`GET`: 
```bash 
/users/campaigns/:name
```

### campaign

`POST`: 
```bash 
/campaign/new-campaign/
```

`PUT`: 
```bash 
/campaign/update-description/
```

`DELETE`: 
```bash 
/campaign/delete-campaign/:campaignId
```

`PATCH`: 
```bash 
/ingredients/image/:id
```

### character

`POST`: 
```bash 
/character/new/
```

`GET`: 
```bash 
/character/find-characters/:campaignid
```

`GET`: 
```bash 
/character/experience/:characterid
```

`DELETE`: 
```bash 
/character/delete-character/:characterid
```

### experience

`POST`: 
```bash
/experience
```

`DELETE`: 
```bash 
/experience/delete/:experienceId
```




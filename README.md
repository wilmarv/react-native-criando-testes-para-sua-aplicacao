# Testes com React-Native

Projeto desenvolvido durante o curso ![React Native: criando testes para sua aplicação ](https://cursos.alura.com.br/course/react-native-criando-testes-aplicacao).
Uma aplicação de Simula envio de lance para itens de leilão para Android e IOS com React Native com ambiente nativo.

## 🚀 Começando

Instruções para executar projeto na maquina local.

### 📋 Pré-requisitos

#### Windows / Linux

 * ![chocolatey](https://chocolatey.org/install)
 * ![Node Js](https://nodejs.org/en/download/)
 * ![JDK](https://www.oracle.com/br/java/technologies/downloads/)
 * ![Android Studio](https://developer.android.com/studio/install?hl=pt-br)

#### MacOs

 * ![HomeBrew](https://brew.sh/index_pt-br)
 * ![Node Js](https://nodejs.org/en/download/)
 * ![Watchman](https://facebook.github.io/watchman/docs/install.html#-homebrew)
 * ![JDK](https://www.oracle.com/br/java/technologies/downloads/)
 * ![Android Studio](https://developer.android.com/studio/install?hl=pt-br)

 
### 🔧 Instalação

#### Baixar dependencia do projeto.

Abrindo o terminal no diretorio do projeto execute o comando

```
npm install
```
ou
```
yarn
```
 
#### Configurações iniciais
No arquivo package.json na chave "script.api" altere para "npx json-server --host {ip host sua maquina} --watch db.json".
Em seguida no diretorio /src/servicos/apiLeiloes.ts e no atributo baseURL altere para o ip host sua maquina.

### ⚙️ Inicializando Serve Json
Continuando com o terminal no diretorio do projeto execute 

```
npm api
```
ou
```
yarn api
```

### 📱 Executando test

```
npm test
```
ou
```
yarn test
```

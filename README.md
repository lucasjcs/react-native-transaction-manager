
## Sobre

Olá! Este projeto consiste em um simulador de transações simples, onde é possível realizar operações de entrada e saída de dinheiro. Também é possível visualizar o histórico das transações.

![](transaction-manager.gif)


## Principais tecnologias utilizadas
 -  [React Native](https://github.com/facebook/react-native)  `0.63.2` 
  -	[TypeScript](https://www.typescriptlang.org/) `3.8.3` para adicionar tipos ao javascript.
 - [Redux](https://webpack.js.org/)  `4.0.5` para gerenciamento do estado da aplicação.
 - [Reduxsauce](https://github.com/jkeam/reduxsauce) `1.2.0"` para simplificar a lógica de actions, types e creators.
 - [seamless-immutable](https://github.com/rtfeldman/seamless-immutable) `7.1.4` para garantir um estado imutável.
-	[styled-components](https://styled-components.com/) `5.1.1` para criação de componentes estilizados.
## Metodologia de Desenvolvimento

A arquitetura do projeto foi baseada na Clean Architecture, porém de forma simplificada, a fim de trazer maior legibilidade e simplicidade a um projeto pequeno. A idéia é extrair a maior parte da regra de negócio para classes de implementação de casos de uso (nesse caso, hooks e o próprio redux), deixam a camada de apresentação de dados muito mais limpa.

## Como executar

##### 1 - Clone do repositório:
```
$ git clone https://github.com/lucasjcs/react-native-transaction-manager.git
```
##### 2 - Instale as dependências:
```
$ cd react-native-transaction-manager
$ npm install ou yarn 
```
Se optar por executar no emulador do iPhone execute também:
`$ cd ios && pod install && cd ..`
##### 3 - Execute o projeto:
Com o ambiente de  [ambiente de desenvolvimento]([[https://github.com/lucasjcs/react-native-run-tutorial](https://github.com/lucasjcs/react-native-run-tutorial)])  configurado (emuladores, SDKs) execute:
```
$ yarn ios ou yarn android
```


## Estrutura do Git
O padrão de commit adotado foi o [Conventional Commits]([https://styled-components.com/]([https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/))).
Para garantir o cumprimento da padronização foi utilizado a biblioteca `git-commit-msg-linter`.


## Licence
Este projeto foi desenvolvido com  :heart: por  [@lucasjcs](https://github.com/lucasjcs) sob a licença [MIT](https://opensource.org/licenses/MIT).

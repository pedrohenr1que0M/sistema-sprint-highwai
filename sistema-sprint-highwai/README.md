# Sistema Sprint HighwAI

Aplicativo cross-platform desenvolvido com **Expo**, **React Native** e **TypeScript** para gerenciamento de ocorrências de forma simples e intuitiva.

## Visão Geral

Este projeto é um sistema de registro de ocorrências que permite:
- listar ocorrências cadastradas;
- cadastrar novas ocorrências com título, local, descrição e nível de risco;
- visualizar detalhes completos de cada ocorrência;
- usar navegação entre telas com React Navigation.

O app foi construído com foco em mobile, mas também é compatível com web via **Expo Web**.

## Funcionalidades

- Tela de listagem de ocorrências
- Registro de nova ocorrência
- Visualização de detalhes de ocorrência
- Identificação visual de nível de risco com badges
- Persistência em memória apenas durante a execução (estado local)

## Estrutura do Projeto

- `App.tsx` - ponto de entrada da aplicação e provedor de navegação
- `src/store.ts` - contexto global de estado para gerenciar ocorrências
- `src/screens/ListScreen.tsx` - tela de listagem de ocorrências
- `src/screens/NewOccurrenceScreen.tsx` - tela de cadastro de novas ocorrências
- `src/screens/DetailScreen.tsx` - tela de detalhes da ocorrência
- `src/components/OccurrenceCard.tsx` - cartão de apresentação da ocorrência
- `src/components/RiskBadge.tsx` - componente visual de nível de risco
- `src/types/` - tipos TypeScript e parâmetros de navegação

## Modelo de Dados

O app usa o seguinte tipo principal:

```ts
export type RiskLevel = 'baixo' | 'medio' | 'alto';

export interface Occurrence {
  id: string;
  title: string;
  description: string;
  risk: RiskLevel;
  date: string;
  location: string;
}
```

A lista inicial (`INITIAL`) contém exemplos de ocorrência para demonstração:
- Vazamento na tubulação
- Iluminação defeituosa

## Navegação

A navegação é feita com **React Navigation Native Stack** e possui as seguintes rotas:

- `List` - tela inicial com lista de ocorrências
- `NewOccurrence` - formulário para adicionar ocorrência
- `Detail` - exibe detalhes de uma ocorrência selecionada

## Instalação

1. Instale as dependências do projeto:

```bash
npm install
```

2. Instale as dependências Expo se necessário:

```bash
npx expo install
```

## Execução

Execute o app com os scripts padrão do Expo:

- `npm run start` - inicia o Expo DevTools
- `npm run android` - abre no emulador ou dispositivo Android
- `npm run ios` - abre no emulador ou dispositivo iOS
- `npm run web` - abre no navegador

## Dependências principais

- `expo` - plataforma para apps React Native
- `react` / `react-native` - bibliotecas principais da aplicação
- `@react-navigation/native` - biblioteca de navegação
- `@react-navigation/native-stack` - pilha de navegação nativa
- `react-native-safe-area-context` - suporte a áreas seguras em dispositivos
- `react-native-screens` - otimização de telas nativas
- `react-native-web` - compatibilidade com web

## Tipos e Contexto

O app utiliza TypeScript para definir tipos fortes e evitar erros comuns.
O estado global de ocorrências é compartilhado usando `StoreContext`, com as propriedades:

- `occurrences: Occurrence[]`
- `addOccurrence: (data: Omit<Occurrence, 'id' | 'date'>) => void`

## Fluxo do Usuário

1. O usuário acessa a tela de `Ocorrências` e vê a lista atual.
2. Ao tocar em `+ Nova`, ele vai para a tela de cadastro.
3. O usuário preenche `Título`, `Local`, `Descrição` e seleciona o nível de risco.
4. Ao salvar, a ocorrência é adicionada à lista e a tela volta para a listagem.
5. Ao tocar em uma ocorrência, o app exibe os detalhes completos.

## Customização

Você pode estender o projeto com:
- armazenamento permanente (AsyncStorage, SQLite, Firebase, etc.)
- edição e exclusão de ocorrências
- filtro e pesquisa por risco, data e local
- autenticação de usuário
- conectividade com backend

## Observações

- O registro de ocorrências é mantido apenas em memória, portanto os dados são perdidos ao reiniciar o app.
- A interface foi projetada para ser limpa, com botões e campos acessíveis.

## Licença

Este projeto está sob a licença do repositório (`LICENSE`).

---
## `README.md`

```markdown
# Sistema de Ocorrências — Motiva

Aplicativo mobile desenvolvido para registro, acompanhamento e classificação
de ocorrências operacionais. Construído com React Native e Expo, utilizando
TypeScript para garantir tipagem segura em todo o projeto.

---

## Demonstração do Fluxo

Lista de Ocorrências → Nova Ocorrência → Salvar → Ver na Lista → Detalhe

---

## Como rodar o projeto

### Pré-requisitos

- Node.js instalado (versão 18 ou superior)
- Expo CLI instalado globalmente:
  npm install -g expo-cli
- Aplicativo Expo Go no celular (Android ou iOS)

### Passo a passo

1. Clone o repositório:
   git clone https://github.com/seu-usuario/sistema-sprint-highwai.git

2. Acesse a pasta do projeto:
   cd sistema-sprint-highwai

3. Instale as dependências:
   npm install

4. Instale os pacotes de navegação:
   npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context

5. Inicie o servidor de desenvolvimento:
   npx expo start

6. Escaneie o QR Code exibido no terminal com o app Expo Go.

---

## O que o app faz

O aplicativo permite que colaboradores da Motiva registrem e acompanhem
ocorrências operacionais no ambiente de trabalho.

### Funcionalidades

- Listar todas as ocorrências cadastradas
- Cadastrar nova ocorrência com descrição, local e nível de risco
- Classificar o risco em três níveis: Baixo, Médio ou Alto
- Visualizar o detalhe completo de cada ocorrência
- Dados mockados carregados automaticamente ao abrir o app

---

## Estrutura do projeto

```
sistema-sprint-highwai/
├── src/
│   ├── screens/
│   │   ├── ListaScreen.tsx
│   │   ├── NovaOcorrenciaScreen.tsx
│   │   └── DetalheScreen.tsx
│   ├── components/
│   │   ├── OcorrenciaCard.tsx
│   │   └── RiskBadge.tsx
│   ├── types/
│   │   ├── index.ts
│   │   └── navigation.ts
│   ├── data/
│   │   └── ocorrencias.ts
│   └── store.ts
├── App.tsx
├── README.md
└── package.json
```

---

## Modelagem de dados

O tipo central da aplicação é Ocorrencia, definido em src/types/index.ts:

```ts
export type NivelRisco = 'baixo' | 'medio' | 'alto';

export type Ocorrencia = {
  id: number;
  descricao: string;
  local: string;
  risco: NivelRisco;
  data: string;
};
```

---

## Como os dados estão mockados

Os dados iniciais ficam em src/data/ocorrencias.ts como um array estático
do tipo Ocorrencia[]. Eles são carregados no estado da aplicação ao iniciar.

Ao cadastrar uma nova ocorrência pelo app, ela é adicionada ao estado via
useState no App.tsx e exibida imediatamente no topo da lista.

Os dados não persistem ao fechar o app. Para persistência, a próxima
evolução seria integrar o AsyncStorage.

---

## Navegação

O app utiliza React Navigation com NativeStackNavigator.

Rota              | Tela                     | Descricao
------------------|--------------------------|----------------------------------
Lista             | ListaScreen              | Lista todas as ocorrencias
NovaOcorrencia    | NovaOcorrenciaScreen     | Formulario de cadastro
Detalhe           | DetalheScreen            | Detalhe de uma ocorrencia

---

## Gerenciamento de estado

O estado global é gerenciado via React Context API, definido em
src/store.ts e instanciado no App.tsx.

```ts
const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>(ocorrenciasMock);
```

O contexto expõe:
- ocorrencias: array com todas as ocorrências
- addOcorrencia: função para adicionar uma nova entrada

---

## Componentes

OcorrenciaCard
Exibe o resumo de uma ocorrência na lista: descrição, local, data e badge
de risco. Recebe ocorrencia e onPress como props.

RiskBadge
Badge colorido que representa o nível de risco visualmente.

Nivel    | Cor
---------|----------
Baixo    | Verde
Medio    | Amarelo
Alto     | Vermelho

---

## Stack utilizada

Tecnologia              | Uso
------------------------|----------------------------
React Native            | Framework mobile
Expo                    | Ambiente de desenvolvimento
TypeScript              | Tipagem estatica
React Navigation        | Navegacao entre telas
React Context API       | Gerenciamento de estado

---

## Equipe

Desenvolvido durante a Sprint 2 do projeto Motiva.

---

## Proximos passos

- Persistência de dados com AsyncStorage
- Filtro por nível de risco na lista
- Edição e exclusão de ocorrências
- Foto anexada à ocorrência
- Integração com API real
```
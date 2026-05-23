import { Ocorrencia } from './index';

export type RootStackParamList = {
  Lista: undefined;
  NovaOcorrencia: undefined;
  Detalhe: { ocorrencia: Ocorrencia };
};
export const Script: IScript = {
  id: 1,
  code: 'test',
  display_name: 'test test',
  steps: [
    {
      id: 1,
      step_index: 1,
      title: 'Hello',
      client_text: 'hello client',
      note: 'wow note',
      step_answers: [
        {
          id: 1,
          rejection: null,
          next_step: 3,
        },
        {
          id: 2,
          rejection: {
            id: 1,
            cause: 'Client is dead',
            text: 'Your client is dead',
            code: 'DeadClient',
          },
          next_step: 2,
        },
      ],
      photo_types: [],
    },
    {
      id: 2,
      step_index: 2,
      title: 'Make a photo',
      client_text: 'please make a photo',
      note: 'wow note',
      step_answers: [],
      photo_types: [
        {
          id: 1,
          page: 1,
          name: 'ID Card page 1',
          score_type: [],
        },
        {
          id: 2,
          page: 2,
          name: 'ID Card page 2',
          score_type: [],
        },
      ],
    },
    {
      id: 3,
      step_index: 3,
      title: 'Make selfie',
      client_text: 'please make selfie',
      note: 'wow note',
      step_answers: [],
      photo_types: [],
    },
  ],
};

type Nullable<T> = T | null;

export interface IScript {
  id: number;
  code: string;
  display_name: string;
  steps: IStep[];
}

export interface IStep {
  id: number;
  step_index: number;
  //replace with locales
  title: string;
  client_text: string;
  note: string;
  step_answers: IStepAnswer[];
  photo_types: IPhotoType[];
}

export interface IStepAnswer {
  id: number;
  rejection: Nullable<IRejection>;
  next_step: number;
}

export interface IPhotoType {
  id: number;
  page: number;
  score_type: IScoreType[];
  //replace with locales
  name: string;
}

export interface IScoreType {
  id: number;
  name: string;
  threshold: string;
}

export interface IRejection {
  id: number;
  code: string;
  //replace with locales
  cause: string;
  text: string;
}

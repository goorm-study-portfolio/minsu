import { http, HttpResponse } from 'msw';
import { experiences, projects, questions, skillCategories } from "@shared/types";

export const handlers = [
  // AboutMe 요청
  http.get('/about', () => {
    return HttpResponse.json(questions);
  }),

  // Skills 요청
  http.get('/skills', () => {
    return HttpResponse.json(skillCategories);
  }),

  http.get('/experiences', () => {
    return HttpResponse.json(experiences);
  }),

  http.get('/projects', () => {
    return HttpResponse.json(projects);
  })
];

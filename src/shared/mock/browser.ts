import { setupWorker } from "msw/browser";
import { handlers } from "@shared/mock/handler.ts";

export const browser = setupWorker(...handlers);

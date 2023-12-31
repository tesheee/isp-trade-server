import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен иметь минимум 5 символов").isLength({
    min: 5,
  }),
  body("name", "Укажите имя").isLength({ min: 3 }),
];

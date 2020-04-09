import Joi from '@hapi/joi';

const schema = Joi.object({
  buttons: Joi.array().required().items(Joi.number()),
  bars: Joi.array().required().items(Joi.number()),
  limit: Joi.number().required().min(0),
});

export const validateData = (data) => {
  const options = { abortEarly: false };
  const { error } = schema.validate(data, options);
  if (!error) return true;
  return false;
};

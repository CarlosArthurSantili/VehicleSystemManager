export type Response<T, PropertyName extends string> = {
  success: boolean;
} & { [P in PropertyName]: T };

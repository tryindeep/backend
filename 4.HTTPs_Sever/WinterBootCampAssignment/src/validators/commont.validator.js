import {z} from "zod";

export const id = z.number().int().positive();

// export const idParamsShcema = z.object({
//     id : z.coerce.number().positive()
// });

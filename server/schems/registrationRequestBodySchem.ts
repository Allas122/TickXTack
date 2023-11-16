import { Type,Static } from "@sinclair/typebox";

export interface registrationBody{
    name:string
}

export const registrationRequestBodySchem = Type.Object({
    password:Type.String(),
    name:Type.String()
})

export type registrationRequestBodyType = Static<typeof registrationRequestBodySchem>

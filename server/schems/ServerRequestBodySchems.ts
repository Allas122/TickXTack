import { Type,Static,Optional} from "@sinclair/typebox";

export const createServerRequestBodySchem = Type.Object({
    creatorId:Type.String({format:"uuid"}),
    name:Type.String(),
    password: Type.Optional(Type.String()),
})

export type createServerBody = Static<typeof createServerRequestBodySchem>

export const getAllServersRequestBodySchem = Type.Object({
    skip:Type.Number()
})
export type getAllServersBody = Static<typeof getAllServersRequestBodySchem>

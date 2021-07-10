import { authReducer } from "../../auth/authReducer"
import { types } from '../../types/types'

describe('Pruebas en authReducer', () => {
    const user = {
        name:'Samuel',
        logged:true
    }
    test('debe de retornar el estado por defecto', () => {
        const state = authReducer(user,{})
        expect(state).toEqual(user)
    })
    
    test('debe de autenticar y colocar el estado del usuario', () => {
        const state = authReducer({logged:false},{type:types.login, payload:{name:'samuelillo'}})
        expect(state).toEqual({name:'samuelillo', logged:true}) 
    })
    test('debe de borrar el name del usuario y logged en false', () => {
        const state = authReducer(user, {type:types.logout})
        expect(state).toEqual({logged:false})
    })
    
})
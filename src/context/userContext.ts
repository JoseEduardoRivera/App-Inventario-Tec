import AsyncStorage from "@react-native-async-storage/async-storage";
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware'
import {userCtl} from '../api'
import {User, Auth} from '../interfaces/user-interface'

interface State {
    user: User;
    login: (auth: Auth) => Promise<void>;
    closeSession: () => void;
}

export const userContext = create<State>()(
    persist(
        (set,get)=> ({
            user: {
                jwt: '',
                user: {
                  id: 0,
                  username: '',
                  email: '',
                  provider: '',
                  confirmed: false,
                  blocked: false,
                  firstname: '',
                  lastname: '',
                  createdAt: '',
                  updatedAt: '',
                },
              },
            login: async (auth:Auth) => {
                try {
                    const response = await userCtl.login(auth.identifier, auth.password)
                    set((state)=> ({
                        user:response
                    }))
                    
                } catch (error) {
                    console.log(error);
                    
                }
            },
            closeSession: () => {
                set({
                    user: {
                      jwt: '',
                      user: {
                        id: 0,
                        username: '',
                        email: '',
                        provider: '',
                        confirmed: false,
                        blocked: false,
                        firstname: '',
                        lastname: '',
                        createdAt: '',
                        updatedAt: '',
                      },
                    },
                  });
            }
        }),
        {
            name:'user-context',
            storage: createJSONStorage(()=> AsyncStorage)
        }
    )
)
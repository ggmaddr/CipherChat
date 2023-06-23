//For Auth.tsx, createUsername function
//structure of the data return by useMutation hook
export interface CreateUsernameData{
    createUsername: {
        success: boolean;
        error: string;
    }
}
export interface CreateUsernameVariables{ //structure of the data passed to useMutation hook
    username: string;
}


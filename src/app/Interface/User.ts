export interface User{
    id:string,
    fullname:string,
    email:string,
    role:string,
    phone:string,
    password:string
}

export interface RegisterUser{
    Fullname:string,
    Email:string,
    Role:string,
    Phone:string,
    Password:string
    

}

export interface RegistrationSuccess{
    message:string
}

export interface LoginUser{
    email:string,
    password:string
}



export interface LoginResponse{
    error: string
    result: Result
    success: boolean
  }
  
  export interface Result {
    token: string
    user: User
  }
  
  export interface User {
    fullname: string
    dob: string
    roles: Role[]
    id: string
    userName: string
    normalizedUserName: string
    email: string
    normalizedEmail: string
    emailConfirmed: boolean
    passwordHash: string
    securityStamp: string
    concurrencyStamp: string
    phoneNumber: any
    phoneNumberConfirmed: boolean
    twoFactorEnabled: boolean
    lockoutEnd: any
    lockoutEnabled: boolean
    accessFailedCount: number
  }
  
  export interface Role {
    name: string
    id: string
  }
  
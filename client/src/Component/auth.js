const users = [
    {ID : "wjddn", password:"123", name:"jeongwoo"},
    {ID : "yun", password:"123", name:"yunhyeong"},
]

export function signIn({ID, password}){
    const user = users.find(
        (user) => user.ID === ID && user.password === password)
        
    if(user === undefined) throw new Error()
    return user
}
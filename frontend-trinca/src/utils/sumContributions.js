export const sumContributions =(list) => {
    return list?.reduce((a,b)=>a + b.contribution, 0)
}
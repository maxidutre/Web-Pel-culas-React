const API = "https://api.themoviedb.org/3"

export const get = (path) => { 
    return fetch(API + path, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGQxNjZmOGJmMWUzMTlkYmY0Y2NhYzMyZTkzNmNjMyIsInN1YiI6IjYyNzNmNWRlNTgwMGM0MDA5Y2RmNzgzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._A7KSbj_hVu8JLIlgbXysivYnNn7C8_LzLUZjF5I37w", "Content-Type": "application/json;charset=utf-8"
                
            },
        }).then(result => result.json())
}
export const ERROR_MESSAGE = 'Sorry about that. But it looks like we made a mistake.';
export const BASE_URL = 'https://asp-net-todo.azurewebsites.net/api';
// export const BASE_URL = 'http://localhost:5000/api';
// export const BASE_URL = 'http://localhost:56361/api';

export const usernameRegex = /^[a-zA-Z0-9-]{5,20}$/;
export const passwordRegex = /^[a-zA-Z0-9 +-/*]{5,20}$/;
export const numberRegex = /^[0-9]*$/;

export const todayRegex = /^\/dashboard\/today$/;
export const listsRegex = /^\/dashboard\/lists\/(.+)$/;
export const searchRegex = /^\/dashboard\/search\/(.*)$/;

export const titleCase = data => {
    data = data.trim();
    return data
        .toLowerCase()
        .split(' ')
        .map(function(word) {
            return word.replace(word[0], word[0].toUpperCase());
        })
        .join(' ');
};


export function setUser(formData) {
    const newUser = {
        name: formData.get('name'),
        character: formData.get('character'),
        oxygen: 100,
        bioluminescence: 0,
        completed: {},
    };
    const stringyNewUser = JSON.stringify(newUser);
    localStorage.setItem('USER', stringyNewUser);
}
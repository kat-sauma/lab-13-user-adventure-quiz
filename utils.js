
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

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id)
            return item;
    }
}
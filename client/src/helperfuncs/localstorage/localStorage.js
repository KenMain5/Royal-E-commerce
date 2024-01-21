export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart'); 
        if (serializedState === null) {
            console.log('No state in local storage');
            return undefined; 
        }
        console.log('Loaded state from local storage:', JSON.parse(serializedState));
        return JSON.parse(serializedState); 
    } catch (err) {
        console.error('Error loading state from local storage:', err);
        return undefined; 
    }
}; 




//module.exports is for the backend
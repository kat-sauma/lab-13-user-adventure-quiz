function scoreOxygen(oxygen) {
    if (oxygen <= 0) {
        return 'corpse';
    }
    if (oxygen > 0) {
        return 'thriving';
    }
}

export default scoreOxygen;
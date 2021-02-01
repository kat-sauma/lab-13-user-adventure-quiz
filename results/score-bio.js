function scoreBioluminescence(bioluminescence) {
    if (bioluminescence <= 0) {
        return 'none';
    }
    if (bioluminescence < 40) {
        return 'little';
    }
    if (bioluminescence > 40) {
        return 'lot';
    }
}

export default scoreBioluminescence;